// controllers/course.controller.js
const Course = require('../model/buy-course'); // Update the path based on your structure

// Add a new course
module.exports.addCourse = (req, res, next) => {
    const course = new Course({

        courseType: req.body.courseType,
        courseLink: req.body.courseLink,
        courseImage: req.body.courseImage
    });

    course.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            return next(err);
        }
    });
};

// Get all courses
module.exports.getCourses = (req, res, next) => {
    Course.find((err, courses) => {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            res.json(courses);
        }
    });
};

// Delete a course by ID
module.exports.deleteCourse = (req, res, next) => {
    const id = req.params.id;
    Course.findByIdAndRemove(id, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Course Deleted Successfully');
        }
    });
};
