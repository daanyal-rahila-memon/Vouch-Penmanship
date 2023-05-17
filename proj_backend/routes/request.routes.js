const express = require("express");
const router = express.Router();

const {
  getIdeaById,
  createIdea,
  getIdea,
  getAllIdeas,
} = require("../controllers/ideas");
const {
  isSignedIn,
  isAuthenticated,
  isSupervisor,
} = require("../controllers/auth");
const { getSupervisorById } = require("../controllers/supervisor");

// params
router.param("supervisorId", getSupervisorById);
router.param("ideaId", getIdeaById);

//actual routes goes here

// Create
router.post(
  "/idea/createIdea/:supervisorId",
  isSignedIn,
  isAuthenticated,
  isSupervisor,
  createIdea
);

// Read
router.get("/idea/getIdea/:ideaId", getIdea);
router.get("/idea/getAllIdeas", getAllIdeas);

module.exports = router;
