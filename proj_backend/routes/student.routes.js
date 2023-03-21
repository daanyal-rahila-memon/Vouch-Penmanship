const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated } = require("../controllers/auth"); // things to be imported from controllers/auth
const { getStudentById, getStudent, updateStudent, updateStudentPassword, deleteStudent, getStudentManuscripts } = require("../controllers/student"); // things to be imported from controllers/student

// params
router.param("studentId", getStudentById);

//actual routes goes here
router.get("/student/:studentId", isSignedIn, isAuthenticated, getStudent); // gets the student from the database using the given id
router.put("/student/:studentId", isSignedIn, isAuthenticated, updateStudent); // updates the student in the databse
router.put("/studentPassword/:studentId", isSignedIn, isAuthenticated, updateStudentPassword); // updates the student's password in the databse
router.delete("/student/:studentId", isSignedIn, isAuthenticated, deleteStudent); // delete the student

router.get("/manuscripts/student/:studentId", isSignedIn, isAuthenticated, getStudentManuscripts)
module.exports = router;
