require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");

const User = require("../models/user.js");
const ExpressError = require("../utils/ExpressError.js");

// Routers
const listingRouter = require("../routes/listing.js");
const reviewRouter = require("../routes/review.js");
const userRouter = require("../routes/user.js");


// =======================
// 🔥 DATABASE CONNECTION
// =======================
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ DB Connection Error:", err);
  });


// =======================
// 🔥 APP CONFIG
// =======================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "../public")));


// =======================
// 🔥 SESSION CONFIG
// =======================
app.use(session({
  secret: process.env.SESSION_SECRET || "mysupersecretcode",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
}));

app.use(flash());


// =======================
// 🔥 PASSPORT AUTH
// =======================
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// =======================
// 🔥 GLOBAL MIDDLEWARE
// =======================
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});


// =======================
// 🔥 ROUTES
// =======================
app.use("/", userRouter);
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);


// =======================
// 🔥 404 HANDLER
// =======================
app.use((req, res, next) => {
  res.status(404).render("error.ejs", { message: "Page Not Found!" });
});


// =======================
// 🔥 ERROR HANDLER
// =======================
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
});


// =======================
// 🚀 START SERVER (Render Compatible)
// =======================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});