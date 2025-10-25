const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });

const { isLoggedIn } = require("../middleware.js");


router.route("/signup")
.get(userController.renderSignupForm)
.post( wrapAsync (userController.signup));

router.route("/login")
.get( userController.renderLoginForm)
.post(
    saveRedirectUrl,
    passport.authenticate("local", { 
        failureRedirect: '/login', 
        failureFlash: true,
    }),
    userController.login
   );

router.get("/logout", userController.logout);

// Profile view
router.get("/profile", isLoggedIn, userController.renderProfile);

// Profile edit form
router.get("/profile/edit", isLoggedIn, userController.renderEditForm);

// Profile update
router.put("/profile", isLoggedIn, upload.single("profilePic"), wrapAsync(userController.updateProfile));

module.exports = router;