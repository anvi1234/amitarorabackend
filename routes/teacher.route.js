
const express =  require("express");
const router = express.Router();
const teacher = require('../controller/teacher.controller');
router.post("/add-teacher",teacher.addteacher);
// // Retrieve all Tutorials
router.get("/get-teacher-by-id/:id",teacher.getTeacherById);
router.get("/get-teacher", teacher.getTeacher);
router.delete('/deleteteacher/:id',teacher.deletePTeacher);
router.put('/updateteacher/:id',teacher.updateTeacher );

module.exports = router;