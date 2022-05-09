const cloudinary = require("cloudinary").v2;
import {CLOUDINARY_NAME,CLOUDINARY_KEY,CLOUDINARY_SECRET} from "../config"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

module.exports = cloudinary;
