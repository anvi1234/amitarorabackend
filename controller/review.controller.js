// controllers/review.controller.js
const Review = require('../model/review'); // Update the path based on your structure

// Add a new review
module.exports.addReview = (req, res, next) => {
    const review = new Review({
        studentName: req.body.studentName,
        studentImage: req.body.studentImage,
        studentDetails: req.body.studentDetails,
        reviewDescription: req.body.reviewDescription
    });

    review.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            return next(err);
        }
    });
};

// Get all reviews
module.exports.getReviews = (req, res, next) => {
    Review.find((err, reviews) => {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            res.json(reviews);
        }
    });
};

// Delete a review by ID
module.exports.deleteReview = (req, res, next) => {
    const id = req.params.id;
    Review.findByIdAndRemove(id, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Review Deleted Successfully');
        }
    });
};
