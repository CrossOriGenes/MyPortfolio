const express = require('express')
const crypto = require('crypto')
const Razorpay = require('razorpay')
const Payment = require('../models/paymentsSchema')
const mailTransporter = require('../utils/mailServer')
const paymentSuccessMail = require('../utils/paymentSuccessMail')
const getRazorpayConfig = require('../config')
require('dotenv').config()

const router = express.Router()

// Get the Razorpay keys based on the environment
const razorpayConfig = getRazorpayConfig()

const instance = new Razorpay({
    key_id: razorpayConfig.key_id,
    key_secret: razorpayConfig.key_secret
})

router.post('/donation', async (req, res, next) => {
    try {
        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        instance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error)
                return res.status(500).json({ message: "Something Went Wrong!" })
            }

            // create a new payment record in DB
            const payment = new Payment({
                _id: order.id,
                amount: req.body.amount,
                donor_name: req.body.username,
                donor_mail: req.body.email,
                donor_message: req.body.message,
                receipt: order.receipt,
                is_created: order.status === 'created' ? true : false
            })
            payment
                .save()
                .then((data) => {
                    console.log(data)
                    console.log('Payment added to DB')
                })
                .catch(err => {
                    console.log(err)
                })

            res.status(200).json({ data: order })
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" })
        console.log(error)
    }
})

router.post("/verify", async (req, res, next) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body
        const sign = razorpay_order_id + "|" + razorpay_payment_id
        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest("hex")

        if (razorpay_signature === expectedSign) {

            instance.payments.fetch(razorpay_payment_id)
                .then(data => {
                    console.log(1, data)

                    Payment.findByIdAndUpdate(
                        { _id: razorpay_order_id },
                        {
                            $set: {
                                razorpay_id: razorpay_payment_id,
                                signature: razorpay_signature,
                                method: data.method,
                                bank: data.bank,
                                vpa: data.vpa,
                                wallet: data.wallet,
                                card_network: data.card_id ? data.card.network : null,
                                card_last4: data.card_id ? data.card.last4 : null
                            },
                        }
                    ).then((data) => {
                        console.log(69, data)
                        console.log("Entry updated with signature");
                    }).catch((err) => {
                        console.log("Failed...", err);
                    });

                    return res.status(200).json({ message: "Payment verified successfully" });
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            return res.status(400).json({ message: "Invalid signature sent!" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error!" })
    }
})

router.get("/getDetails/:sign", async (req, res, next) => {
    try {
        const query = req.params.sign
        const data = await Payment.findOne({ signature: query })
        if (!data) {
            res.status(400).json({ msg: 'Data not found!' })
        } else {

            let mailDetails = {
                from: "crossorigenes@gmail.com",
                to: data.donor_mail,
                subject: "Thanks for donating ❤️",
                html: paymentSuccessMail(data),
            };

            mailTransporter.sendMail(mailDetails, (err) => {
                if (err) {
                    console.log("Error Occurs")
                } else {
                    console.log("Email sent successfully")
                }
            });
        }

        setTimeout(() => {
            res.status(200).json({ msg: 'Please check your email', data });
        }, 1000);
    } catch (error) {
        next(error);
    }
});


module.exports = router