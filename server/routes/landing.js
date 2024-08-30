const express = require('express')
const Project = require('../models/projectsSchema')
require('dotenv').config()

const router = express.Router()

router.post('/addProject',async(req,res,next) => {
    try {
        
    } catch (error) {
        next(error)
    }
})

module.exports = router