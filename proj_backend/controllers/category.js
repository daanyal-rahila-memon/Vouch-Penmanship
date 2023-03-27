const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((error, category) => {
    if (error || !category) {
      return res.status(400).json({
        error: "Category not found in DB",
      });
    }
    req.category = category;
    next();
  });
};

// Create
exports.createCategory = (req, res) => {
  req.body.name = req.body.name.toLowerCase(); // to convert the user's email in Lower Case
  const category = new Category(req.body);

  category.save((error, category) => {
    if (error || !category) {
      return res.status(400).json({
        error: "NOT able to save category in DB",
      });
    }
    return res.json(category);
  });
};

// Read
exports.getCategory = (req, res) => {
  return res.json(req.category);
};

exports.getAllCategories = (req, res) => {
  Category.find().exec((error, categories) => {
    if (error || !categories) {
      return res.status(400).json({
        error: "No categories found",
      });
    }
    return res.json(categories);
  });
};

// Update
exports.updateCategory = (req, res) => {
  const category = req.category;
  category.name = req.body.name;

  category.save((error, updatedCategory) => {
    if (error) {
      return res.status(400).json({
        error: "Failed to update category",
      });
    }
    return res.json(updatedCategory);
  });
};

// Delete
exports.deleteCategory = (req, res) => {
  const category = req.category;

  category.remove((error, category) => {
    if (error) {
      return res.status(400).json({
        error: "Failed to delete category",
      });
    }
    return res.json({
      Message: `${category} Successfully deleted`,
    });
  });
};
