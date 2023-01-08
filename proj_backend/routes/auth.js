const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup", // request
  [
    check("email", "It must be in Email Format - domain@host.com").isEmail(),
    check("password", "Password should be at least 6 characters").isLength({ min: 6 })
  ], // Middleware
  signup // response
);

router.post(
  "/signin", // request
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 1 })
  ], // Middleware
  signin // response
);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
  // res.send("A Protected Route");
  res.json(req.auth);
});

module.exports = router;
