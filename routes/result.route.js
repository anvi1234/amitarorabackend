
const express =  require("express");
const router = express.Router();

const result = require('../controller/result.controller');
router.post("/add-result",result.addResult);
// // Retrieve all Tutorials
router.get("/get-result", result.getResult);
router.delete('/deleteResult/:id', result.deleteResult);

module.exports = router;