const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

// Signup Route
router.post(
  "/signup/:role", // request
  [
    check("email", "It must be in Email Format - domain@host.com").isEmail(),
    check("password", "Password should be at least 6 characters").isLength({
      min: 6,
    }),
  ], // Middleware
  signup // response
);

// Signin Route
router.post(
  "/signin/:role", // request
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 1 }),
  ], // Middleware
  signin // response
);

// Signout Route
router.get("/signout", signout);

// Test Route
// router.get("/testroute", isSignedIn, (req, res) => {
//   // res.send("A Protected Route");
//   res.json(req.auth);
// });

module.exports = router;
