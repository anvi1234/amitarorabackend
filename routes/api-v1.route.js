const express = require('express');
const router = express.Router();


router.use('/teacher', require('./teacher.route'));
router.use('/banner', require('./banner.route'));
router.use('/result', require('./result.route'));
router.use('/gallery', require('./gallery.route'));
router.use('/buy-course', require('./buy-course.route'));
router.use('/review', require('./review.route'));
router.use('/contact', require('./contact.route'));
router.use('/event', require('./event.route'));

module.exports = router;
