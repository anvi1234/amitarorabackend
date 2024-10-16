
const Teacher = require('../model/teacher'); // Update the path based on your structure

// Add a new teacher
module.exports.addTeacher = (req, res, next) => {
    const teacher = new Teacher({
        teacherName: req.body.teacherName,
        teacherImage: req.body.teacherImage,
        teacherDetails: req.body.teacherDetails,
        teacherDescription: req.body.teacherDescription,
        teacherLevel: req.body.teacherLevel,
        position:req.body.position
    });

    teacher.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            return next(err);
        }
    });
};

// Get all teachers
module.exports.getTeachers = (req, res, next) => {
    Teacher.find((err, teachers) => {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            res.json(teachers);
        }
    });
};

// Delete a teacher by ID
module.exports.deleteTeacher = (req, res, next) => {
    const id = req.params.id;
    Teacher.findByIdAndRemove(id, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Teacher Deleted Successfully');
        }
    });
};
