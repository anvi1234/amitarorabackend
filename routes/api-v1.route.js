const express = require('express');
const router = express.Router();


router.use('/teacher', require('./teacher.route'));
router.use('/banner', require('./banner.route'));
router.use('/result', require('./result.route'));
router.use('/gallery', require('./gallery.route'));

module.exports = router;
