const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({    
    image_id: {
        type: String
    },
    src: {
        type: String
    },
    _id: false
})

const ProjectsSchema = new mongoose.Schema({
    largeURL: {
        type: ImageSchema
    },
    thumbnailURL: {
        type: ImageSchema
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    },
    category: {
        type: String
    },
    title: {
        type: String
    },
    projectLink: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('Projects', ProjectsSchema)