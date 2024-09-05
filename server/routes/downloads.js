const express = require('express')
const User = require('../models/userSchema')
const mailTransporter = require('../utils/mailServer')
const dwnldConfirmationMail = require('../utils/dwnldConfirmMail')

const router = express.Router()

router.post('/', async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (user) {
            await User.findOneAndUpdate({ email: req.body.email }, { user_name: req.body.username, timestamp: Date.now() })
        } else {
            const data = new User({
                user_name: req.body.username,
                email: req.body.email
            })
            data.save()
        }

        let mailDetails = {
            from: "crossorigenes@gmail.com",
            to: req.body.email,
            subject: "Thanks for interacting! 🤗",
            html: dwnldConfirmationMail(req.body.username),
        };

        mailTransporter.sendMail(mailDetails, (err) => {
            if (err) {
                console.log("Error Occurs")
            } else {
                console.log("Email sent successfully")
                res.status(200).send({ msg: 'Please check your email' })
            }
        });

    } catch (error) {
        next(error)
    }
})

module.exports = router