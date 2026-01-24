// server.js
const mongoose = require("mongoose");
const app = require("./app.js");

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

async function startServer() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
    });
    console.log("🔥 MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

startServer();
