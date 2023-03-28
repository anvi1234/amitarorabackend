
const express =  require("express");
const router = express.Router();

const banner = require('../controller/banner.controller');
router.post("/add-banner",banner.addbanner);
// // Retrieve all Tutorials
router.get("/get-banner", banner.getbanner);
router.delete('/deletebanner/:id', banner.deletebanner);

module.exports = router;