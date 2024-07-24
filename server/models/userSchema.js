const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    user_name: {
        type: String
    },
    email: {
        type: String
    },
    image: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Users', UserSchema)