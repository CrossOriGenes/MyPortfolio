const express = require('express')
const crypto = require('crypto')
const Razorpay = require('razorpay')
const Payment = require('../models/paymentsSchema')
require('dotenv').config()

const router = express.Router()

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})


router.post('/donation', async (req, res, next) => {
    try {
        // const instance = new Razorpay({
        //     key_id: process.env.RAZORPAY_KEY_ID,
        //     key_secret: process.env.RAZORPAY_KEY_SECRET
        // })

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
                .then(() => {
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
        
        // let payment_method, bank_name, vpa_id, wallet_id, card_last4, card_network
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body
        const sign = razorpay_order_id + "|" + razorpay_payment_id
        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest("hex")

        if (razorpay_signature === expectedSign) {
            let obj = {}
            instance.payments.fetch(razorpay_payment_id)
                .then(data => {
                    // console.log(data)
                    obj = data
                })
                .catch(err => {
                    console.log(err)
                })
            console.log(88, obj)

            await Payment.findByIdAndUpdate({ _id: razorpay_order_id }, {
                $set: {
                    razorpay_id: razorpay_payment_id,
                    signature: razorpay_signature,
                    // method: obj.method,
                    // bank: obj.bank,
                    // vpa: obj.vpa,
                    // wallet: obj.wallet,
                    // card_network: obj.network,
                    // card_last4: obj.last4
                }
            }).then(() => {
                console.log('Entry updated with signature')
            }).catch((err) => {
                console.log('Failed...', err)
            })

            return res.status(200).json({ message: "Payment verified successfully" })
        } else {
            return res.status(400).json({ message: "Invalid signature sent!" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" })
        console.log(error)
    }
})

router.get("/getDetails/:sign", async (req, res, next) => {
    try {
        const query = req.params.sign
        const data = await Payment.findOne({ signature: query })
        setTimeout(() => {
            res.status(200).json(data);
        }, 1000);
    } catch (error) {
        next(error);
    }
});


router.get("/test", async (req, res, next) => {
    try {
        instance.payments.fetch("pay_OqHEhW9LTZn8Pq").then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(500).json('Failed!!' || err)
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router