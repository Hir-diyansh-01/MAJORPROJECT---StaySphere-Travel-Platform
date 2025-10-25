// map.js

// 🗺️ Map initialize (India center fallback)
const map = L.map("map").setView([22.9734, 78.6569], 4);

// 🗺️ MapTiler tiles
L.tileLayer(
  `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${mapTilerKey}`,
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://www.maptiler.com/">MapTiler</a>',
    maxZoom: 20,
  }
).addTo(map);

// 📍 Marker cluster (optional)
const markers = L.markerClusterGroup();

// ✅ Add markers for all listings
allListings.forEach((listing) => {
  if (listing.geometry && listing.geometry.coordinates) {
    const lat = listing.geometry.coordinates[1];
    const lng = listing.geometry.coordinates[0];

    const popupContent = `
      <div style="width:180px">
        <img src="${listing.image.url}" alt="${listing.title}" style="width:100%; border-radius:8px;"/>
        <h6 style="margin:5px 0">${listing.title}</h6>
        <p style="margin:0">${listing.location}, ${listing.country}</p>
        <p style="margin:0"><b>₹${listing.price.toLocaleString("en-IN")}</b></p>
      </div>
    `;

    const marker = L.marker([lat, lng]).bindPopup(popupContent);
    markers.addLayer(marker);
  }
});

// 👀 Add cluster group to map
map.addLayer(markers);

// 📌 Zoom to fit all markers if available
if (markers.getLayers().length > 0) {
  map.fitBounds(markers.getBounds(), { padding: [50, 50] });
}
