if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("./app/app.js");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// ======================
// 🔥 MONGODB CONNECTION
// ======================
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
    });
    console.log("🔥 MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // agar DB connect nahi hoti to server stop kar do
  }
}

// DB connect hone ke baad server start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
