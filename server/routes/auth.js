const express = require('express')
const passport = require('passport')
const googleStrategy = require("passport-google-oauth20").Strategy
require('dotenv').config()
const User = require('../models/userSchema')

const app = express()
app.use(passport.initialize())
app.use(passport.session())

passport.use(
    "google",
    new googleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:8000/auth/google/callback",
        },
        async (accessToken, refreshToken, profile, cb) => {
            // console.log(profile._json);
            try {
                var newuser = await User.findOne({ email: profile._json.email });

                if (!newuser) {
                    newuser = new User({
                        user_name: profile.displayName,
                        email: profile._json.email,
                        image: profile._json.picture,
                    });
                    newuser.save();
                }

                return cb(null, { accessToken });
            } catch (err) {
                return cb(err, null);
            }
        }
    )
)

passport.serializeUser((user, done) => {
    console.log(11, "serializing user" + JSON.stringify(user));
    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log(12, "deserialized user" + JSON.stringify(user));
    // User.findById(id, (err, user)=>{
    done(null, user);

    // })
})

const router = express.Router()

router.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
)

router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: "http://localhost:3000/downloads",
        failureRedirect: "/auth/failure",
    }),
);

router.get('/auth/googleLogin', (req, res, next) => {
    try {
        res.status(200).json({ msg: "login successful", token: req.user.accessToken })
    } catch (err) {
        console.log(err)
    }
})

router.get('/auth/failure', (req, res, next) => {
    try {
        res.status(301).json({ msg: "Failed to SignIn!" })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router