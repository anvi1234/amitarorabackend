
const express =  require("express");
const router = express.Router();

const event = require('../controller/event.controller');
router.post("/add-event",event.addEvent);
// // Retrieve all Tutorials
router.get("/get-event", event.getEvent);
router.delete('/deleteevent/:id', event.deleteEvent);

module.exports = router;