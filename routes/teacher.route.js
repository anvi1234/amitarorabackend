
const express =  require("express");
const router = express.Router();
const teacher = require('../controller/teacher.controller');
router.post("/add-teacher",teacher.addTeacher);
router.get("/get-teacher", teacher.getTeachers);
router.delete('/deleteteacher/:id',teacher.deleteTeacher);
module.exports = router;