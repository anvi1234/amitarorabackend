
const Event = require('../model/event'); // Update the path based on your structure

// Add a new banner
module.exports.addEvent = (req, res, next) => {
    try {
        const event = new Event({
            eventFile: req.body.eventFile,
            eventName: req.body.eventName
        });
       event.save((err, doc) => {
            if (err) {
                console.error("Error saving event:", err);
                return next(err);
            }
          
            res.send(doc);
        });
    } catch (error) {
        console.error(error)
    }
};

// Get all banners
module.exports.getEvent = (req, res, next) => {
    Event.find((err, siteData) => {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            res.json(siteData);
        }
    });
};

// Delete a banner by ID
module.exports.deleteEvent = (req, res, next) => {
    const id = req.params.id;
    Event.findByIdAndRemove(id, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Event Deleted Successfully');
        }
    });
};
