
const express =  require("express");
const router = express.Router();

const banner = require('../controller/banner.controller');
router.post("/add-banner",banner.addBanner);
router.put("/update-banner/:id",banner.updateBanner);
// // Retrieve all Tutorials
router.get("/get-banner", banner.getBanners);
router.delete('/deletebanner/:id', banner.deleteBanner);

module.exports = router;