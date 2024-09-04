const path = require('path');
const express = require('express')

const mongoose = require('mongoose')
const cors = require('cors')
// const passport = require("passport");
// const session = require('express-session')
require('dotenv').config()

const downloadRoutes = require('./routes/downloads')
const paymentRoutes = require('./routes/payments')
const landingPageRoutes = require('./routes/landing')

const app = express()
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    credentials: true
}))

// const __dirname = path.resolve();
// app.use(
//     session({
//         secret: process.env.SESSION_SECRET,
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             // httpOnly: false,
//             maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
//             // sameSite: "strict",
//             secure: false, // Set to true in production if using HTTPS
//         },
//     })
// )

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


// app.use(passport.initialize());
// app.use(passport.session());

// app.use('/', authRoutes)
app.use('/downloads', downloadRoutes)
app.use('/payments', paymentRoutes)
app.use('/api', landingPageRoutes)

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('DB connection successful')
}).catch((err) => {
    console.log('DB connection Failed!')
    console.error(err)
})

app.listen(8000, () => {
    console.log('Running on port:8000')
})

