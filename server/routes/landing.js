const express = require('express')
const Project = require('../models/projectsSchema')
const cloudinary = require('cloudinary').v2
require('dotenv').config()

const router = express.Router()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})

router.post('/addProject', async (req, res, next) => {
    try {
        const data = new Project({
            largeURL: req.body.largeImg,
            thumbnailURL: req.body.thumbnailImg,
            height: req.body.height,
            width: req.body.width,
            category: req.body.info.category,
            projectLink: req.body.info.projectLink,
            title: req.body.info.title,
            description: req.body.info.description
        })
        await data
            .save()
            .then(() => {
                setTimeout(() => {
                    res.send({ msg: 'Project added to DB' })
                }, 1000)
            })
            .catch(err => {
                res.status(400).send({ msg: 'Failed to add to DB!' || err })
            })
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.get('/allProjects', async (req, res, next) => {
    try {
        const projects = await Project.find()
        setTimeout(() => {
            res.status(200).json(projects)
        }, 1500)
    } catch (error) {
        console.log(error)
        res.status(400).send({ msg: 'Something went wrong!' || error })
    }
});

router.delete('/deleteProject/:id', async (req, res) => {
    try {
        const id = req.params.id
        const project = await Project.findById({ _id: id }, { largeURLId: '$largeURL.image_id', thumbnailURLId: '$thumbnailURL.image_id' })

        const largeURLId = project.get('largeURLId')
        const thumbnailURLId = project.get('thumbnailURLId')

        cloudinary.api.delete_resources([largeURLId, thumbnailURLId], (result) => {
            console.log(result)
        }).catch(err => {
            console.log(err)
            res.status(401).send({ message: "Failed to delete image from cloudinary" })
        })

        await Project.findByIdAndDelete({ _id: id })
        res.status(200).json({ msg: "Project removed successfully" })

    } catch (error) {
        console.log(error)
        res.status(400).send({ msg: 'Something went wrong!' || error })
    }
})

module.exports = router;