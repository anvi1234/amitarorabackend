// controllers/contact.controller.js
const Contact = require('../model/contact'); // Update the path based on your structure

// Add a new contact message
module.exports.addContact = (req, res, next) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
        phone:req.body.phone
    });

    contact.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            return next(err);
        }
    });
};

// Get all contact messages
module.exports.getContacts = (req, res, next) => {
    Contact.find((err, contacts) => {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            res.json(contacts);
        }
    });
};

// Delete a contact message by ID
module.exports.deleteContact = (req, res, next) => {
    const id = req.params.id;
    Contact.findByIdAndRemove(id, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Contact message Deleted Successfully');
        }
    });
};
