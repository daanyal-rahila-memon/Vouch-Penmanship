const Student = require("../models/student");
const Supervisor = require("../models/Supervisor");
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
const student = require("../models/student");
require("dotenv").config();

exports.signup = (req, res) => {
  // // Testing below
  // console.log("REQ BODY", req.body);      // console will show the request sent through this & it is done by body-parser
  // res.json({
  //     message: "Signup Successful"
  // });

  // check validations
  // console.log(req.body);
  const errors = validationResult(req);
  // console.log(req.body);
    if (!errors.isEmpty())
    {
    return res.status(422).json({
      error: errors.array()[0].msg,
      param: errors.array()[0].param,
    });
    };

  // Student Signup Code
  const student = new Student(req.body); // creating the object of Student (model)
  // console.log(student);
  student.save((error, student) => {
    // console.log(student);
        if (error)
        {
      // console.log("check");
      console.log(error);
      return res.status(404).json({
        error: "NOT able to save user in Database",
      });
    }
    res.json(student);
  });
};

exports.signin = (req, res) => {
  // check validations
  const errors = validationResult(req);
  // console.log(req.body);
  // getting email & password form the body of the request
  const { role, email, password } = req.body;

    if (!errors.isEmpty())
    {
    return res.status(422).json({
      error: errors.array()[0].msg,
      param: errors.array()[0].param,
    })
  };
  // console.log(email);
  // check if the entered email exists in Student (model)
  Student.findOne({ email }, (error, student) => {
    // console.log(student);
    if (error || !student) {
      return res.status(400).json({
        error: "USER email not found",
      });
    }
    // console.log(password);
    // check if the entered passwword is valid
    if (!student.authenticate(password)) {
      return res.status(401).json({
        error: "USER password is invalid",
      });
    }

    // create token
    const token = jwt.sign({ _id: student._id }, process.env.SECRET);
    // console.log(token);

    // put token in cookie to learn if user has already looged in
    res.cookie("token", token, { expire: new Date() + 9999 });

    // send some response to frontend
    // console.log(student);
    const { _id, firstName, lastName, role, email } = student;
    return res.json({
      token,
      student: { _id, firstName, lastName, role, email },
    });
  });
};

exports.signout = (req, res) => {
  // before signing out we need to clear the cookie
  res.clearCookie("token"); // clear the cookie - whose name & value is "token" & token, respectively - using ClearCookie method from cookie-parser

  res.json({
    message: "User Signout Successfully",
  });
};

// protected routes
// In this Middleware we won't need to add next() method as it is dealt by express-jwt
// signed in means that the user is signed in and can roam around and can change/look any information of anyone
exports.isSignedIn = expressJwt({
  // is to check whether the user loggen in or not by using created token
  secret: process.env.SECRET,
  userProperty: "auth", // it contains the value which we passed while createing the token in jwt.sign(). In this case, we have _id; and this property 'auth' will be contained by the req
});

// custom middlewares
// authenticated means that the user is signed in and can only change/look information of his account
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id === req.auth._id; // It will check whether the user is authenticated or not. checker will be filled using 3 thing things: profile (it is the id of user who shoot the request and will only be get set if the user is Logged in and has id, name, email, anything like that), auth (it will be set using isSignIn method), profile.id === auth.id means Logged-in user who shoot the request is same as the one who's account been signed in
  if (!checker) {
    res.status(403).json({
      // status code = 403 means you're not allowed to do so
      error: "ACCESS DENIED: User is not authenticated",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (!req.profile.role === 0) {
    res.status(403).json({
      // status code = 403 means you're not allowed to do so
      error: "ACCESS DENIED: You're not Admin",
    });
  }
  next();
};

exports.isSupervisor = (req, res, next) => {
  if (!req.profile.role === 2) {
    res.status(403).json({
      // status code = 403 means you're not allowed to do so
      error: "ACCESS DENIED: You're not Supervisor",
    });
  }
  next();
};
