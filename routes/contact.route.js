// routes/contact.routes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controller/contact.controller');

// Define the routes
router.post('/add-contacts', contactController.addContact);
router.get('/get-contacts', contactController.getContacts);
router.delete('/delete-contacts/:id', contactController.deleteContact);

module.exports = router;
