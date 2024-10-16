// routes/course.routes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controller/buycourse.controller');

// Define the routes
router.post('/add-courses', courseController.addCourse);
router.get('/get-courses', courseController.getCourses);
router.delete('/deletecourses/:id', courseController.deleteCourse);

module.exports = router;
