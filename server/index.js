const path = require('path');
const express = require('express')

const mongoose = require('mongoose')
const cors = require('cors')
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

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.join(__dirname, '../client/build')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


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

