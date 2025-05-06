
const express =  require("express");
const router = express.Router();

const event = require('../controller/event.controller');
router.post("/add-event",event.addEvent);
// // Retrieve all Tutorials
router.get("/get-event", event.getEvent);
router.delete('/deleteevent/:id', event.deleteEvent);
router.put('/update-event/:id', event.updateEvent);

module.exports = router;