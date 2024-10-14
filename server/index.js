const path = require('path');
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const downloadRoutes = require('./routes/downloads')
const paymentRoutes = require('./routes/payments')
const landingPageRoutes = require('./routes/landing')
require('dotenv').config()

const app = express()
app.use(cors({
    origin: ['https://www.crossorigenes.works', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    credentials: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// api routes
app.use('/downloads', downloadRoutes)
app.use('/payments', paymentRoutes)
app.use('/api', landingPageRoutes)

// static dir build 

// databse connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(8000, () => {
        console.log('Running on port:8000')
    })
    console.log('DB connection successful')
}).catch((err) => {
    console.log('DB connection Failed!')
    console.error(err)
})

