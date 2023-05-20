const express = require("express");
const router = express.Router();

const {
  getIdeaById,
  createIdea,
  getIdea,
  getAllIdeas,
  getIdeasBySupervisorId,
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
router.get("/idea/getIdeasBySupervisorId", getIdeasBySupervisorId);

// // Update
// router.put("/category/:categoryId/:adminId", isSignedIn, isAuthenticated, isAdmin, updateCategory);
//
// // Delete
// router.delete("/category/:categoryId/:adminId", isSignedIn, isAuthenticated, isAdmin, deleteCategory);

module.exports = router;
