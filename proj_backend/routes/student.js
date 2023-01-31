const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin, isSupervisor } = require("../controllers/auth"); // things to be imported from controllers/auth
const { getStudentById, getStudent, updateStudent } = require("../controllers/student"); // things to be imported from controllers/student

router.param("studentId", getStudentById);
router.get("/student/:studentId", isSignedIn, isAuthenticated, getStudent); // gets the student from the database using the given id
router.put("student/:studentId", isSignedIn, isAuthenticated, updateStudent);   // updates the student in the databse

module.exports = router;
