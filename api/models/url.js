const mongoose = require('mongoose');
const shortId = require('shortid')

const urlSchema = new mongoose.Schema({
    fullUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true,
        default: () => shortId.generate()
    },
    clicks:{
        type:String,
        default:0
    },
    deneme:{
        type:String,
    },
})

module.exports = mongoose.model('Url',urlSchema);
