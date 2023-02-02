const crypto = require("crypto");
const uuidv4 = require("uuid/v4");
const student = require("../models/student");
const Student = require("../models/student");

// This function will work with 'params', bcz we've the 'id' (parameter) here
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
      req.profile = student; // store all the object data - driven from database - in req.profile
      next();
    }
  });
};

// this function will work when someone will call the function without 'params' => gets the student (object) and to show student's stored information over the screen (frontend)
exports.getStudent = (req, res) => {
  // As in getStudentById, we already have everything in req.profile, now just have to respond it back

  // Following will only change in the data which is being sent to the frontend
  req.profile.salt = undefined; // Make the salt undefined so that it should not be displayed over the frontend, as it's a private information
  req.profile.encryPassword =
    req.profile.createdAt =
    req.profile.updatedAt =
      undefined; // Make the encryPassword, createdAt, and updatedAt undefined so that it should not be displayed over the frontend, as it's a private information
  // For above lines of code: We are not setting these properties undefined in the database, instead it is just in the profile object (temporarily) over the frontend

  return res.json(req.profile);
};

exports.updateStudent = (req, res) => {
  // Update the student information
  // password will be updated in this function
  Student.findByIdAndUpdate(
    { _id: req.profile._id }, // id will remain the same
    { $set: req.body }, // sets the new student information which is coming - in req.body - from the frontend
    { new: true, useFindAndModify: false }, // "new: true", it'll return the new/udated document
    (error, student) => {
      if (error) {
        // we won't be checking !student in this as if no object was to be found then the error has already been come up above, at {_id: req.profile._id}
        return res.status(400).json({
          error: "You're not authorized to update this student",
        });
      } else {
        // Following will only change in the data which is being sent to the frontend
        student.salt =
          student.encryPassword =
          student.createdAt =
          student.updatedAt =
            undefined; // Make the encryPassword, createdAt, and updatedAt undefined so that it should not be displayed over the frontend, as it's a private information

        res.json(student);
      }
    }
  );
};

// // to update the password for the student
// exports.updateStudentPassword = (req, res) => {

//   // Find student
//   Student.findOne(req.profile._id, )
  
//   // Find Student by ID and look if he's entered the password & email to change the password, then check if does the email exist, then change the password
//   Student.findByIdAndUpdate({ _id: req.profile._id });
//   if (req.body.password) {
//     if (req.body.email) {
//       if (req.body.email == req.profile.email) {
//         req.body.salt = uuidv4();
//         req.body.encryPassword = crypto
//           .createHmac("sha256", req.body.salt)
//           .update(req.body.password)
//           .digest("hex");
//       } else {
//         return res.status(400).json({
//           error: "Enter the correct Email Address",
//         });
//       }
//     }
//     else
//   {
//     return res.status(404).json({
//       error: "Please enter the email first to change the password"
//     });
//   }
//   }
//   else
//   {
//     return res.status(404).json({
//       error: "Please enter Password to change"
//     });
//   }
// };

exports.deleteStudent = (req, res) => {
  Student.findByIdAndDelete(req.profile.id, (error, student) => {
    if (error) {
      return res.status(400).json({
        error: "No Student found in Database",
      });
    } else {
      return res.json({
        student,
        Deleted: "Success",
      });
    }
  });
};
