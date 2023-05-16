const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated } = require("../controllers/auth"); // things to be imported from controllers/auth
const { getSupervisorById, getSupervisor, getAllSupervisors, updateSupervisor, updateSupervisorPassword, deleteSupervisor} = require("../controllers/supervisor"); // things to be imported from controllers/supervisor

// params
router.param("supervisorId", getSupervisorById);

//actual routes goes here
router.get("/supervisor/:supervisorId", isSignedIn, isAuthenticated, getSupervisor); // gets the supervisor from the database using the given id
router.get("/supervisor/getAllSupervisors", getAllSupervisors)  // gets all the supervisors from the database
router.put("/supervisor/:supervisorId", isSignedIn, isAuthenticated, updateSupervisor); // updates the supervisor in the databse
router.put("/supervisorPassword/:supervisorId", isSignedIn, isAuthenticated, updateSupervisorPassword); // updates the supervisor's password in the databse

router.delete("/supervisor/:supervisorId", isSignedIn, isAuthenticated, deleteSupervisor); // delete the supervisor from the databse

module.exports = router;
