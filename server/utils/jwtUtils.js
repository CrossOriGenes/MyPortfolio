const jwt = require('jsonwebtoken')

const generateToken = (payload) => {
    const options = {
        expiresIn: '1h', // Token expiration time
    }

    const token = jwt.sign(payload, "R&a", options)
    return token
}

const validateToken = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (authHeader) {
        const token = authHeader.split(' ')[1] // Bearer <token>

        jwt.verify(token, "R&a", (err, payload) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    message: 'Invalid token',
                })
            } else {
                req.user = payload
                next()
            }
        })
    } else {
        res.status(401).json({
            success: false,
            message: 'Token is not provided',
        })
    }
}

module.exports = {
    generateToken,
    validateToken
}