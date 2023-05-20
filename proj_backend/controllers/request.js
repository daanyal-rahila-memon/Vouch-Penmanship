const Request = require("../models/request");

exports.getRequestById = (req, res, next, id) => {
  Request.findById(id).exec((error, request) => {
    if (error || !request) {
      return res.status(400).json({
        errorMessage: "No Requests found in DB",
        error: error,
      });
    }
    req.request = request;
    next();
  });
};

// Create
exports.createRequest = (req, res) => {
  console.log("in proj_backend/controller/request/createRequest");
  console.log(req.body);

  console.log(req.profile);
  console.log(req.body);
  req.body.student = req.profile._id;
  const request = new Request(req.body);

  request.save((error, requestObj) => {
    if (error || !requestObj) {
      return res.status(400).json({
        errorMessage: "NOT able to save Idea in DB",
        error: error,
      });
    }
    return res.json(requestObj);
  });
};

// Read
exports.getRequest = (req, res) => {
  return req.request;
}

exports.getRequestBySupervisor = (req, res) => {
  // console.log(req.query.document)
  console.log(req.profile._id);
  Request.find({ supervisor: req.profile._id }) // only bring those requests of this supervisor
    .sort([["desc"]]) // sort on these properties
    .exec((error, requests) => {
      if (error) {
        return res.status(400).json({
          errorMessage: "No Requests Found against this Supervisor",
          error: error,
        });
      }
      return res.json(requests);
    });
};

// exports.getAllIdeas = (req, res) => {
//   Idea.find().exec((error, ideas) => {
//     if (error || !ideas) {
//       return res.status(400).json({
//         error: "No Ideas found",
//       });
//     }
//     return res.json(ideas);
//   });
// };

// Update
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
