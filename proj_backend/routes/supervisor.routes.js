const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated } = require("../controllers/auth"); // things to be imported from controllers/auth
const {
  getSupervisorById,
  getSupervisor,
  updateSupervisor,
  updateSupervisorPassword,
  deleteSupervisor,
} = require("../controllers/supervisor"); // things to be imported from controllers/supervisor

router.param("supervisorId", getSupervisorById);

router.get("/supervisor/:supervisorId", isSignedIn, isAuthenticated, getSupervisor); // gets the supervisor from the database using the given id
router.put("/supervisor/:supervisorId", isSignedIn, isAuthenticated, updateSupervisor); // updates the supervisor in the databse
router.put(
  "/supervisorPassword/:supervisorId",
  isSignedIn,
  isAuthenticated,
  updateSupervisorPassword
); // updates the supervisor's password in the databse

router.delete(
  "/supervisor/:supervisorId",
  isSignedIn,
  isAuthenticated,
  deleteSupervisor
); // delete the supervisor from the databse

module.exports = router;
