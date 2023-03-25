import express from "express";
import { 
        addMark,
        addStudent, 
        addSubject, 
        addTeacher, 
        deleteMark, 
        deleteStudent, 
        deleteSubject, 
        deleteTeacher, 
        getAllMarks, 
        getAllStudents, 
        getAllSubjects, 
        getAllTeachers, 
        updateMark, 
        updateStudent,
        updateSubject,
        updateTeacher
     } from "../controllers/TeacherController.js";

const router = express.Router();

router.post("/addStudent", addStudent);
router.post("/addSubject", addSubject);
router.post("/addMark", addMark);
router.post("/addTeacher", addTeacher);

router.get("/getAllStudents",getAllStudents)
router.get("/getAllSubjects",getAllSubjects)
router.get("/getAllTeachers",getAllTeachers)
router.get("/getAllMarks",getAllMarks)

router.put("/updateStudent", updateStudent);
router.put("/updateSubject", updateSubject);
router.put("/updateMark", updateMark);
router.put("/updateTeacher", updateTeacher);

router.delete("/deleteStudent/:id", deleteStudent);
router.delete("/deleteSubject/:id", deleteSubject);
router.delete("/deleteMark/:id", deleteMark);
router.delete("/deleteTeacher/:id", deleteTeacher);

export default router;