const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
    type: String
    },

  profilePic: {
    type: String,
    default: "/images/default.png"
    },

    lastLogin: {
    type: Date
    },

    lastUpdated: {
    type: Date
    },

    createdAt: {
    type: Date,
    default: Date.now
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
