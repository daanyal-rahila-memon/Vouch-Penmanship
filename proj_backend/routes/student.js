const express = require("express");
const router = express.router;

const { getStudentById, getUser } = require("../controllers/student"); // things to be imported from controllers/student
const {isSignedIn, isAuthenticated, isAdmin, isSupervisor } = require("../controllers/auth"); // things to be imported from controllers/auth

router.param(studentId, getStudentById);
router.get("/student/:studentId", isSignedIn, isAuthenticated, getUser);

module.exports = router;
