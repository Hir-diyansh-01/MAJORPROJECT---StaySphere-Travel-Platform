// controllers/listings.js
const axios = require("axios");
const Listing = require("../models/listing"); 

module.exports.index = async (req, res) => {
  const { category, q } = req.query;
  let filter = {};

  if (q) {
  filter.$or = [
    { location: { $regex: q, $options: "i" } },
    { title: { $regex: q, $options: "i" } },
    { description: { $regex: q, $options: "i" } },
  ];
}

  if (category) {
    filter.category = category;
  }

  const allListings = await Listing.find(filter);

  console.log("Filtered Listings:", allListings.length, " | Filter:", filter);

  res.render("listings/index.ejs", {
    allListings,
    currUser: req.user,
    maptilerKey: process.env.MAPTILER_KEY,
    category,  // selected category
    q: req.query.q || "" // search query 
  });
};


// render new form
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// show single listing
module.exports.showListing = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: { path: "author" }
      })
      .populate("owner");

    if (!listing) {
      req.flash("error", "Listing you requested does not exist!");
      return res.redirect("/listings");
    }

    // server-side owner check (safe)
    const isOwner =
      req.user && listing.owner && String(listing.owner._id) === String(req.user._id);

    res.render("listings/show.ejs", {
      listing,
      maptilerKey: process.env.MAPTILER_KEY,
      currUser: req.user,
      isOwner,
    });
  } catch (err) {
    console.error("Error in showListing:", err);
    req.flash("error", "Something went wrong.");
    res.redirect("/listings");
  }
};

// create listing (with MapTiler geocoding)
module.exports.createListing = async (req, res) => {
  try {
    const { listing } = req.body; // expects req.body.listing
    let geometry = null;

    // build a good query: prefer "location, country" if present
    const q = `${listing.location || ""} ${listing.country ? ", " + listing.country : ""}`.trim();

    if (q) {
      try {
        const geoRes = await axios.get(
          `https://api.maptiler.com/geocoding/${encodeURIComponent(q)}.json`,
          {
            params: { key: process.env.MAPTILER_KEY, limit: 1 },
            timeout: 7000,
          }
        );
        if (geoRes.data && geoRes.data.features && geoRes.data.features.length > 0) {
          const coords = geoRes.data.features[0].geometry.coordinates; // [lng, lat]
          geometry = { type: "Point", coordinates: coords };
        }
      } catch (geoErr) {
        console.warn("Geocoding failed, using fallback coords:", geoErr.message);
      }
    }

    // fallback if geocoding failed
    if (!geometry) {
      geometry = { type: "Point", coordinates: [77.2090, 28.6139] }; // Delhi fallback
    }

    // image (if upload middleware sets req.file.path)
    const url = req.file ? req.file.path : (listing.image && listing.image.url) || "";
    const filename = req.file ? req.file.filename : (listing.image && listing.image.filename) || "";

    const newListing = new Listing({
      ...listing,
      owner: req.user._id,
      image: { url, filename },
      geometry,
    });

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect(`/listings/${newListing._id}`);
  } catch (err) {
    console.error("Error creating listing:", err);
    req.flash("error", "Something went wrong while creating the listing.");
    res.redirect("/listings");
  }
};

// render edit form
module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  const originalImageUrl = listing.image?.url
    ? listing.image.url.replace("/upload", "/upload/h_300,w_250")
    : "";

  res.render("listings/edit.ejs", { listing, originalImageUrl, currUser: req.user });
};

// update listing (with geocode if location changed)
// Update Listing
module.exports.updateListing = async (req, res) => {
  try {
    const { id } = req.params;
    let listing = await Listing.findById(id);

    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }

    // apply submitted fields
    listing.set(req.body.listing);

    // if new image uploaded
    if (req.file) {
      listing.image = { url: req.file.path, filename: req.file.filename };
    }

    // if location provided, try geocoding again
    if (req.body.listing?.location) {
      const q = `${req.body.listing.location} ${req.body.listing.country ? ", " + req.body.listing.country : ""}`.trim();
      if (q) {
        try {
          const geoRes = await axios.get(
            `https://api.maptiler.com/geocoding/${encodeURIComponent(q)}.json`,
            { params: { key: process.env.MAPTILER_KEY, limit: 1 }, timeout: 7000 }
          );
          if (geoRes.data?.features?.length > 0) {
            const coords = geoRes.data.features[0].geometry.coordinates;
            listing.geometry = { type: "Point", coordinates: coords };
          }
        } catch (geoErr) {
          console.warn("Geocoding on update failed:", geoErr.message);
        }
      }
    }

    await listing.save();
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    console.error("Error updating listing:", err);
    req.flash("error", "Something went wrong while updating.");
    res.redirect("/listings");
  }
};

// Delete Listing
module.exports.destroyListing = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);

    if (!deletedListing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }

    console.log("🗑️ Deleted:", deletedListing._id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  } catch (err) {
    console.error("Error deleting listing:", err);
    req.flash("error", "Could not delete listing.");
    res.redirect("/listings");
  }
};
