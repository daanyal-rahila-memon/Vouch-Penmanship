const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
require("dotenv").config();
const Student = require("../models/student");
const Supervisor = require("../models/supervisor");
const Admin = require("../models/admin");

exports.signup = (req, res) => {
  // Testing Block
  // {
  //   console.log("REQ BODY", req.body); // console will show the request sent through this & it is done by body-parser
  //   res.json({
  //     message: "Signup Successful",
  //   });
  // }

  // console.log(req.body); 
  // check validations
  const errors = validationResult(req); // validationResult() -- Extracts the validation errors from a request and makes them available in a errors as Array. Each error in the array is an object that contains information about the validation error, such as the location of the error, the parameter that failed validation, and the error message.
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      param: errors.array()[0].param,
    });
  }

  req.body.email = req.body.email.toLowerCase(); // to convert the user's email in Lower Case

  // User Signup Code
  let modelObj;
  if (req.body.role == "student") {
    console.log("I'm in student condition");
    modelObj = new Student(req.body); // creating the object of the model (Student, Supervisor)
  } else if (req.body.role == "supervisor") {
    modelObj = new Supervisor(req.body); // creating the object of the model (Student, Supervisor)
  } else if (req.body.role == "admin") {
    modelObj = new Admin(req.body); // creating the object of the model (Student, Supervisor)
  }
  console.log(modelObj)
  modelObj.save((error, obj) => {
    if (error || !obj) {
      return res.status(404).json({
        error: "NOT able to save user in Database OR this user already exists",
      });
    }
    res.json(obj);
  });
};

exports.signin = (req, res) => {
  console.log("in proj_backend/controllers/auth");
  console.log(req.body);

  // check validations
  const errors = validationResult(req);

  req.body.email = req.body.email.toLowerCase(); // to convert the user's email in Lower Case

  // getting email & password form the body of the request
  const { role, email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      param: errors.array()[0].param,
    });
  }

  let modelObj, model;
  if (role === "student") {
    // console.log("I'm in student condition");
    modelObj = new Student(req.body); // creating the object of the model (Student, Supervisor)
    model = Student;
  } else if (role === "supervisor") {
    // console.log("I'm in supervisor condition");
    modelObj = new Supervisor(req.body); // creating the object of the model (Student, Supervisor)
    model = Supervisor;
  } else if (role === "admin") {
    console.log("I'm in admin condition");
    modelObj = new Admin(req.body); // creating the object of the model (Student, Supervisor)
    model = Admin;
  }
  // check if the entered email exists in model
  model.findOne({ email }, async (error, obj) => {
    // console.log(obj);
    if (error || !obj) {
      return res.status(400).json({
        errorMessage: "USER email not found",
        error: error,
      });
    }
    // console.log(password);
    // check if the entered passwword is valid
    console.log(obj.access);
    if (obj.access) {
      if (!obj.authenticate(password)) {
        return res.status(401).json({
          errorMessage: "USER password is invalid",
          error: error,
        });
      }
    }
    else {
      return res.status(401).json({
        errorMessage: "Your access is denied by the administrator"
      })
    }

    // create token
    const token = jwt.sign({ _id: obj._id }, process.env.SECRET);
    // console.log(token)

    // put token in cookie to learn in future if the user has already logged in or not
    res.cookie("token", token, { expire: new Date() + 9999 });

    // send some response to frontend
    const { _id, firstName, lastName, role, email } = obj;
    return res.json({
      token,
      object: { _id, firstName, lastName, role, email },
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
// signed in means that the user is signed-in and the session isn't expired and still valid.
exports.isSignedIn = expressJwt({
  // is to check whether the user loggen in or not by using `created token`
  secret: process.env.SECRET,
  userProperty: "auth", // `auth` contains the value which we passed while creating the token in jwt.sign(). In this case, we have _id; and this property 'auth' will be contained by the req
});

// custom middlewares
// authenticated means that the user is signed into his own account and can change/look information of his/her account
exports.isAuthenticated = (req, res, next) => {
  // console.log("auth in proj_backend/controllers/auth");
  // let checker = req.profile && req.auth && req.profile._id == req.auth._id; // It will check whether the user is authenticated or not. checker will be filled using 3 things: 1) req.profile (it is the id of the user who shoot the request and will only be get set in getStudentById and if the user is Logged-in), req.auth (it will be set using isSignIn method), req.profile._id === req.auth._id means Logged-in user who shoot the request is same as the one who's account been signed in
  let checker = req.profile?._id == req.auth?._id; // `?` represnts that req.profile & req.auth is available. This line is Equal to the `let checker = req.profile && req.auth && req.profile._id == req.auth._id;`
  if (!checker) {
    res.status(403).json({
      // status code = 403 means you're not allowed to do so
      error: "ACCESS DENIED: User is not authenticated",
    });
  }
  // console.log("leaving auth in proj_backend/controllers/auth");
  next();
};

exports.isAdmin = (req, res, next) => {
  if (!req.profile.role === "admin") {
    res.status(403).json({
      // status code = 403 means you're not allowed to do so
      error: "ACCESS DENIED: You're not Admin",
    });
  } else {
    res.json(req.body);
  }
  next();
};

exports.isSupervisor = (req, res, next) => {
  // console.log("in proj_backend/controller/isSupervisor")
  if (!req.profile.role === "supervisor") {
    res.status(403).json({
      // status code = 403 means you're not allowed to do so
      error: "ACCESS DENIED: You're not Supervisor",
    });
  }
  next();
};
