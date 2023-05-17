const Idea = require("../models/idea");

exports.getIdeaById = (req, res, next, id) => {
  Idea.findById(id).exec((error, idea) => {
    if (error || !idea) {
      return res.status(400).json({
        errorMessage: "Ideas by any supervisor not found in DB",
        error: error,
      });
    }
    req.idea = idea;
    next();
  });
};

// Create
exports.createIdea = (req, res) => {
  console.log("in proj_backend/controller/createIdea");
  console.log(req.body);

  console.log(req.profile);
  req.body.supervisor = req.profile._id;
  console.log(req.body);
  const idea = new Idea(req.body);

  idea.save((error, idea) => {
    if (error || !idea) {
      return res.status(400).json({
        errorMessage: "NOT able to save Idea in DB",
        error: error,
      });
    }
    return res.json(idea);
  });
};

// Read
exports.getIdea = (req, res) => {
  return res.json(req.idea);
};

exports.getAllIdeas = (req, res) => {
  Idea.find().exec((error, ideas) => {
    if (error || !ideas) {
      return res.status(400).json({
        error: "No Ideas found",
      });
    }
    return res.json(ideas);
  });
};

// // Update
// exports.updateCategory = (req, res) => {
//   const category = req.category;
//   category.name = req.body.name;
// 
//   category.save((error, updatedCategory) => {
//     if (error) {
//       return res.status(400).json({
//         error: "Failed to update category",
//       });
//     }
//     return res.json(updatedCategory);
//   });
// };
// 
// // Delete
// exports.deleteCategory = (req, res) => {
//   const category = req.category;
// 
//   category.remove((error, category) => {
//     if (error) {
//       return res.status(400).json({
//         error: "Failed to delete category",
//       });
//     }
//     return res.json({
//       Message: `${category} Successfully deleted`,
//     });
//   });
// };
