// model/course.model.js
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    courseType: { type: String, required: true }, // 'Foundation' or 'Intermediate'
    courseLink: { type: String, required: true }, // Assuming Link is a String
    courseImage: { type: String, required: true }
});

module.exports = mongoose.model('BuyCourse', CourseSchema);
