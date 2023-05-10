const express = require('express')
const router = express.Router();

const { getManuscriptById, createManuscript, getStudentManuscripts, getManuscriptsByCategory, getAllManuscripts_NFT, getManuscript, setDocument, getDocument, updateManuscript, deleteManuscript } = require("../controllers/manuscript")
const { isSignedIn, isAuthenticated } = require("../controllers/auth")
const { getStudentById} = require("../controllers/student")

// params
router.param("studentId", getStudentById);
router.param("manuscriptId", getManuscriptById);

// actual routes

//create route
router.post("/manuscript/create/:studentId", isSignedIn, isAuthenticated, createManuscript);

// read routes
router.get("/manuscript/getStudentManuscripts/:studentId", isSignedIn, isAuthenticated, getStudentManuscripts);
router.get("/manuscript/:manuscriptId", isSignedIn, isAuthenticated, getManuscript);
router.get("/manuscript/document/:manuscriptId", getDocument);

// update route
router.put("/manuscript/:manuscriptId/:studentId", updateManuscript);
router.put("/manuscript/setDocument/:manuscriptId/:studentId", setDocument);

// delete route
router.delete("/manuscript/:manuscriptId/:studentId", deleteManuscript);

// listing routes
router.get("/manuscript/:studentId", getManuscriptsByCategory);
router.get("/manuscripts", getAllManuscripts_NFT);

module.exports = router;