const express = require('express')
const router = express.Router();

const { getManuscriptById, createManuscript, getManuscript, getDocument } = require("../controllers/manuscript")
const { isSignedIn, isAuthenticated } = require("../controllers/auth")
const { getStudentById} = require("../controllers/student")

// params
router.param("studentId", getStudentById);
router.param("manuscriptId", getManuscriptById);

// actual routes

//create routes
router.post("/manuscript/create/:studentId", isSignedIn, isAuthenticated, createManuscript);

// read routes
router.get("/manuscript/:manuscriptId", isSignedIn, isAuthenticated, getManuscript);
router.get("/manuscript/document/:manuscriptId", getDocument);

module.exports = router;