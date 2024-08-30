const mongoose = require('mongoose')

// const DonorSchema = new mongoose.Schema({
//     username: {
//         type: String,
//     },
//     email: {
//         type: String,
//     },
//     message: {
//         type: String
//     },
//     _id: false
// })

// const CardSchema = new mongoose.Schema({
//     network: {
//         type: String
//     },
//     last4: {
//         type: String
//     },
//     _id: false
// })

const PaymentSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    amount: {
        type: Number
    },
    donor_name: {
        type: String,
    },
    donor_mail: {
        type: String,
    },
    donor_message: {
        type: String
    },
    method: {
        type: String
    },
    receipt: {
        type: String
    },
    bank: {
        type: String
    },
    vpa: {
        type: String
    },
    wallet: {
        type: String
    },
    card_network: {
        type: String
    },
    card_last4: {
        type: String
    },
    signature: {
        type: String
    },
    razorpay_id: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    is_created: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Payments', PaymentSchema)