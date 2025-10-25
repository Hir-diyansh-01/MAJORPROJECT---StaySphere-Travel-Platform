// models/listing.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: { url: String, filename: String },
  price: Number,
  location: String,
  country: String,
  // ADD THIS:
  category: {
    type: String,
    enum: [
      "discover","stays","city","adventure","heritage","luxepool",
      "camping","countryside","winter","domes","waterfront"
    ],
    default: "stays",
    required: true
  },

  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number], // [lng, lat]
      default: [77.2090, 28.6139],
    },
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

module.exports = mongoose.model("Listing", listingSchema);
