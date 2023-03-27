const express = require('express');
const router = express.Router();

const { getCategoryById, createCategory, getCategory, getAllCategories, updateCategory, deleteCategory } = require("../controllers/category");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getAdminById } = require("../controllers/admin");

// params 
router.param("adminId", getAdminById);
router.param("categoryId", getCategoryById);

//actual routes goes here

// Create
router.post("/category/create/:adminId", isSignedIn, isAuthenticated, isAdmin, createCategory);

// Read
router.get("category/:categoryId", getCategory);
router.get("categories", getAllCategories)

// Update
router.put("/category/:categoryId/:adminId", isSignedIn, isAuthenticated, isAdmin, updateCategory);

// Delete
router.delete("/category/:categoryId/:adminId", isSignedIn, isAuthenticated, isAdmin, deleteCategory);

module.exports = router;