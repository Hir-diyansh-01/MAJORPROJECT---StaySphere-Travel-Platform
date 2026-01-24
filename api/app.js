if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user.js");
const ExpressError = require("../utils/ExpressError.js");

const listingRouter = require("../routes/listing.js");
const reviewRouter = require("../routes/review.js");
const userRouter = require("../routes/user.js");

// ======================
// 🔥 MONGODB CONNECTION
// ======================
const MONGO_URL = process.env.MONGO_URL;

let isConnected = false;
mongoose.set("bufferCommands", false);

async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGO_URL, {
      serverSelectionTimeoutMS: 30000,
    });
    isConnected = true;
    console.log("🔥 MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
}

connectDB();

// ======================
// 🛠 APP CONFIG
// ======================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "../public")));

// ======================
// 🔐 SESSION & AUTH
// ======================
const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ======================
// 🌍 GLOBAL MIDDLEWARE
// ======================
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

// ======================
// 🚏 ROUTES
// ======================
// ⚠️ Important: order matters to avoid conflicts
app.use("/", userRouter);
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);

// ======================
// ❌ ERROR HANDLING
// ======================

// 404 Handler
app.use((req, res, next) => {
  res.status(404).render("error.ejs", { message: "Page Not Found!" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

module.exports = app;
