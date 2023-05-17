const express = require("express");
const router = express.Router();

const {
  getRequestById,
  createRequest
} = require("../controllers/request");
const {
  isSignedIn,
  isAuthenticated,
} = require("../controllers/auth");
const { getStudentById } = require("../controllers/student");

// params
router.param("studentId", getStudentById)
router.param("requestId", getRequestById);

//actual routes goes here

// Create
router.post(
  "/request/createRequest/:studentId",
  isSignedIn,
  isAuthenticated,
  createRequest
);

// Read
// router.get("/idea/getIdea/:ideaId", getIdea);
// router.get("/idea/getAllIdeas", getAllIdeas);

module.exports = router;
