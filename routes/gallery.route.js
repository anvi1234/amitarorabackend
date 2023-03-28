
const express =  require("express");
const router = express.Router();

const gallery = require('../controller/gallery.controller');
router.post("/add-gallery",gallery.addgallery);
// // Retrieve all Tutorials
router.get("/get-gallery", gallery.getGallery);
router.delete('/deletegallery/:id', gallery.deletegallery);

module.exports = router;