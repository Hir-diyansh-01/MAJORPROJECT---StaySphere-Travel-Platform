// server.js
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("./app/app.js"); // yeh tumhara Express app
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// ======================
// 🔥 MONGODB CONNECTION
// ======================
let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
    });
    isConnected = true;
    console.log("🔥 MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // agar DB connect nahi hoti to server stop kar do
  }
}

// DB connect hone ke baad hi server start hoga
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
