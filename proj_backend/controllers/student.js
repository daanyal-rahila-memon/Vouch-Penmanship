const crypto = require("crypto");
const uuidv4 = require("uuid/v4");
const Student = require("../models/student");
const Manuscript = require("../models/manuscript");

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
  // This can update all the information of the student besides the password
  // Update the student information
  // password will be updated in this function
  Student.findByIdAndUpdate(
    { _id: req.profile._id }, // id will remain the same
    { $set: req.body }, // sets the new student information which is coming - in req.body - from the frontend to the old student information
    { new: true, useFindAndModify: false }, // "new: true", it'll return the new/updated document
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

// TODO: Correct this functionality
// to update the password for the student
exports.updateStudentPassword = (req, res) => {
  let salt = uuidv4();
  let Password = crypto
    .createHmac("sha256", salt)
    .update(req.body.password)
    .digest("hex");

  // Find Student by ID and look if he's entered the password & email to change the password, then check if does the email exist, then change the password
  Student.findByIdAndUpdate(
    { _id: req.profile._id }, // Replace with the _id of the user you want to update
    { password: Password }, // Replace with the new name you want to set
    { new: true }, // Return the updated document
    (err, obj) => {
      if (err) {
        console.log(err);
      } else {
        console.log(obj);
      }
    }
  );
};

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

exports.getStudentManuscripts = (req, res) => {     // Whenever you need to get some details from one collection (Manuscript) and store it to other collection (Student), you use populate()
  Manuscript.find({student: req.profile._id})    // We're looking for Manuscripts which are pushed in manuscript model by this student/req.profile._id
  .populate("student", "_id firstName lastName")    // takes 2 parameters => 1st, which model you want to update and 2nd, fields which need to bring in (update/populate)
  .exec((error, manuscript) => {
    if(error) {
      return res.status(400).json({
        error: "No manuscript found of this student"
      })
    }
    return res.json(manuscript);
  })
}
