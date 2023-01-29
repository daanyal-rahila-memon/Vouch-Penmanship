const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin, isSupervisor } = require("../controllers/auth"); // things to be imported from controllers/auth
const { getStudentById, getStudent } = require("../controllers/student"); // things to be imported from controllers/student

router.param("studentId", getStudentById);
router.get("/student/:studentId", isSignedIn, isAuthenticated, getStudent);

module.exports = router;
