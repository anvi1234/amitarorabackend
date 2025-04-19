const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventFile: { type: String, required: true }, // Adjust type and required based on your needs
    eventName: { type: String, required: true },
    position: { type: Number, required: true }
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
