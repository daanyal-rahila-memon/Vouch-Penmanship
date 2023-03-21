const express = require('express');
const router = express.Router();

const { getCategoryById, createCategory, getCategory, getAllCategories } = require("../controllers/category");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getStudentById } = require("../controllers/student");

// params 
router.param("studentId", getStudentById);
router.param("categoryId", getCategoryById);

//actual routes goes here
router.post("/category/create/:studentId", isSignedIn, isAuthenticated, isAdmin, createCategory);
router.get("category/:categoryId", getCategory);
router.get("categories", getAllCategories)

module.exports = router;