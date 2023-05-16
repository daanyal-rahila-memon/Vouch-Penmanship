const express = require("express")
const router = express.Router()

const {
    getManuscriptById,
    createManuscript,
    getStudentManuscripts,
    getAllManuscripts,
    getManuscriptsByCategory,
    getAllManuscripts_NFT,
    getManuscript,
    setDocument,
    setNFT,
    getDocument,
    updateManuscript,
    deleteManuscript,
} = require("../controllers/manuscript")
const { isSignedIn, isAuthenticated } = require("../controllers/auth")
const { getStudentById } = require("../controllers/student")

// params
router.param("studentId", getStudentById)
router.param("manuscriptId", getManuscriptById)

// actual routes

//create route
router.post(
    "/manuscript/create/:studentId",
    createManuscript,
    isSignedIn,
    isAuthenticated
)

// read routes
router.get(
    "/manuscript/getStudentManuscripts/:studentId",
    isSignedIn,
    isAuthenticated,
    getStudentManuscripts
)
router.get(
    "/manuscript/get/:manuscriptId",
    isSignedIn,
    isAuthenticated,
    getManuscript
)
router.get("/manuscript/document/:manuscriptId", getDocument)

// update route
router.put("/manuscript/:manuscriptId/:studentId", updateManuscript)
router.put("/manuscript/setDocument/:manuscriptId/:studentId", setDocument)
router.put("/manuscript/setNFT", setNFT)

// delete route
router.delete("/manuscript/:manuscriptId/:studentId", deleteManuscript)

// listing routes
router.get("/manuscript/getAllManuscripts", getAllManuscripts)
router.get(
    "/manuscript/getManuscriptsByCategory/:studentId",
    getManuscriptsByCategory
)
router.get("/manuscript/getAllManuscripts_NFT", getAllManuscripts_NFT)

module.exports = router
