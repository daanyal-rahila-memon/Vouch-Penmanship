const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated } = require("../controllers/auth"); // things to be imported from controllers/auth
const { getAdminById, getAdmin, updateAdmin, updateAdminPassword, deleteAdmin } = require("../controllers/admin"); // things to be imported from controllers/admin

// params
router.param("adminId", getAdminById);

//actual routes goes here
router.get("/admin/:adminId", isSignedIn, isAuthenticated, getAdmin); // gets the admin from the database using the given id
router.put("/admin/:adminId", isSignedIn, isAuthenticated, updateAdmin); // updates the admin in the databse
router.put("/adminPassword/:adminId", isSignedIn, isAuthenticated, updateAdminPassword); // updates the admin's password in the databse
router.delete("/admin/:adminId", isSignedIn, isAuthenticated, deleteAdmin); // delete the admin

module.exports = router;
