const Student = require("../models/student");

// This function will work with 'params', bcz we've the 'id' here
exports.getStudentById = (req, res, next, id) => {
  // execute the function findById(id) - which is populated/has 'id' & is a function of Student model
  Student.findById(id).exec((error, student) => {
    // whenever database callbacks are called it returns 2 things: error or the object, itself if it was found
    if (error || !student) {
      // First we'll check for the error or if no object was found
      // then
      return res.status(400).json({
        error: "No student found in Database",
      });
    } // if no error & the student was found
    else {
      // then we'll store the student
      req.profile = student; // store all the information in req.profile
      next();
    }
  });
};

// this function will work when someone will call the function without 'params' => gets the student (object) and to show student's stored information over the screen (frontend)
exports.getStudent = (req, res) => {
  // As in getStudentById, we already have everything in req.profile, now just have to respond it back
  // TODO: get back here for the password
  return res.json(req.profile);
};
