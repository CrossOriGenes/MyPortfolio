const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
require('dotenv').config()

const authRoutes = require('./routes/auth')

const app = express()
app.use(cors({
    origin: 'http://localhost:3000', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            // httpOnly: true,
            // maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
            // sameSite: "strict",
            secure: false, // Set to true in production if using HTTPS
        },
    })
)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,Origin');
//     next();
// });

app.use('/', authRoutes)

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('DB connection successful')
}).catch((err) => {
    console.log('DB connection Failed!')
    console.error(err)
})

app.listen(8000, () => {
    console.log('Running on port:8000')
})

