const path = require('path');
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const downloadRoutes = require('./routes/downloads')
const paymentRoutes = require('./routes/payments')
const landingPageRoutes = require('./routes/landing')
const adminRoutes = require('./routes/admin')
require('dotenv').config()

const PORT = process.env.PORT
const app = express()
app.use(cors({
    origin: [
        'https://my-portfolio-qg9sljwg3-crossorigenes-projects.vercel.app',
        'https://www.crossorigenes.works',
        'http://localhost:5173',
        'http://localhost:3000',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    credentials: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// api routes
app.use('/api', landingPageRoutes)
app.use('/downloads', downloadRoutes)
app.use('/payments', paymentRoutes)
app.use('/admin', adminRoutes)
app.use('/', (req, res) => {
    res.status(200).json({
        msg: "Server running successfully...",
        status: 200
    })
})
// static dir build 
// app.use(express.static(path.join(__dirname, '../client/build')));
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

// databse connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Running on port: ${PORT}`)
    })
    console.log('DB connection successful')
}).catch((err) => {
    console.log('DB connection Failed!')
    console.error(err)
})

