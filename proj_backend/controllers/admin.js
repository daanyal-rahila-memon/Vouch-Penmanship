const crypto = require("crypto");
const uuidv4 = require("uuid/v4");
const Admin = require("../models/admin");

// This function will work with 'params', bcz we've the 'id' (parameter) here
exports.getAdminById = (req, res, next, id) => {
  // execute the function findById(id) - which is populated/has 'id' & is a function of Admin model
  Admin.findById(id).exec((error, admin) => {
    // whenever database callbacks are called it returns 2 things: error or the object, itself if it was found
    if (error || !admin) {
      // First we'll check for the error or if no object was found
      // then
      return res.status(400).json({
        error: "No admin found in Database",
      });
    } // if no error & the admin was found
    else {
      // then we'll store the admin
      req.profile = admin; // store all the object data - driven from database - in req.profile
      next();
    }
  });
};

// this function will work when someone will call the function without 'params' => gets the admin (object) and to show admin's stored information over the screen (frontend)
exports.getAdmin = (req, res) => {
  // As in getAdminById, we already have everything in req.profile, now just have to respond it back

  // Following will only change in the data which is being sent to the frontend
  req.profile.salt = undefined; // Make the salt undefined so that it should not be displayed over the frontend, as it's a private information
  req.profile.encryPassword =
    req.profile.createdAt =
    req.profile.updatedAt =
      undefined; // Make the encryPassword, createdAt, and updatedAt undefined so that it should not be displayed over the frontend, as it's a private information
  // For above lines of code: We are not setting these properties undefined in the database, instead it is just in the profile object (temporarily) over the frontend

  return res.json(req.profile);
};

exports.updateAdmin = (req, res) => {
  // This can update all the information of the admin besides the password
  // Update the admin information
  // password will be updated in this function
  Admin.findByIdAndUpdate(
    { _id: req.profile._id }, // id will remain the same
    { $set: req.body }, // sets the new admin information which is coming - in req.body - from the frontend to the old admin information
    { new: true, useFindAndModify: false }, // "new: true", it'll return the new/updated document
    (error, admin) => {
      if (error) {
        // we won't be checking !admin in this as if no object was to be found then the error has already been come up above, at {_id: req.profile._id}
        return res.status(400).json({
          error: "You're not authorized to update this admin",
        });
      } else {
        // Following will only change in the data which is being sent to the frontend
        admin.salt =
          admin.encryPassword =
          admin.createdAt =
          admin.updatedAt =
            undefined; // Make the encryPassword, createdAt, and updatedAt undefined so that it should not be displayed over the frontend, as it's a private information

        res.json(admin);
      }
    }
  );
};

// TODO: Correct this functionality
// to update the password for the admin
exports.updateAdminPassword = (req, res) => {
  let salt = uuidv4();
  let Password = crypto
    .createHmac("sha256", salt)
    .update(req.body.password)
    .digest("hex");

  // Find Admin by ID and look if he's entered the password & email to change the password, then check if does the email exist, then change the password
  Admin.findByIdAndUpdate(
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

exports.deleteAdmin = (req, res) => {
  Admin.findByIdAndDelete(req.profile.id, (error, admin) => {
    if (error) {
      return res.status(400).json({
        error: "No Admin found in Database",
      });
    } else {
      return res.json({
        admin,
        Deleted: "Success",
      });
    }
  });
};