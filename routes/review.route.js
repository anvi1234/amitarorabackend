// routes/review.routes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controller/review.controller');

// Define the routes
router.post('/add-reviews', reviewController.addReview);
router.get('/get-reviews', reviewController.getReviews);
router.delete('/deletereviews/:id', reviewController.deleteReview);

module.exports = router;