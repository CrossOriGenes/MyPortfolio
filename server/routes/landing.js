const express = require('express')
const Project = require('../models/projectsSchema')
require('dotenv').config()

const router = express.Router()

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
                res.send({ msg: 'Project added to DB' })
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
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: 'Something went wrong!' || error });
    }
});

module.exports = router;