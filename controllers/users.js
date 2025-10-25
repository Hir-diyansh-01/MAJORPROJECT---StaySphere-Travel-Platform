const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs")
};

module.exports.signup = async(req, res) => {
   try{
     let { username, email, password } = req.body;
    const newUser = new User({email, username});
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
        if(err) {
            return next(err);
        }
         req.flash("success", "Welcome to StaySphere!");
    res.redirect("/listings");
    })
   } catch(e) {
    req.flash("error", e.message);
    res.redirect("/signup");
   }
};

module.exports.renderLoginForm =  (req, res) => {
    res.render("users/login.ejs")
};

module.exports.login = async (req, res) => {
    // Save current time as lastLogin
    const user = await User.findById(req.user._id);
    user.lastLogin = new Date();
    await user.save();

    req.flash("success", "Welcome Back to StaySphere!");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};


module.exports.logout =  (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
};

// show profile
module.exports.renderProfile = (req, res) => {
  res.render("users/profile", { user: req.user });
};

// show edit form
module.exports.renderEditForm = (req, res) => {
  res.render("users/edit", { user: req.user });
};

// update profile
module.exports.updateProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (req.body.name) user.name = req.body.name;

    // if photo uploaded
    if (req.file) {
      user.profilePic = req.file.path; // Cloudinary URL
    }

    user.lastUpdated = new Date();

    await user.save();
    req.flash("success", "Profile updated successfully!");
    res.redirect("/profile");
  } catch (err) {
    next(err);
  }
};