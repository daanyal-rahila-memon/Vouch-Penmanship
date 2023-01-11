import {
  Box,
  TextField,
  Button,
  Link,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { React, useState } from "react";
import {
  Email,
  Lock,
  Person,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles, styled } from "@mui/material/";
import PersonIcon from "@mui/icons-material/Person";

import theme from "../theme";
import { margin, positions, textAlign } from "@mui/system";
import { signup } from "../auth/helper/index";

export default function Signup() {
  const roleArray = ["Supervisor", "Student", "Admin"];

  const [role, setRole] = useState("Student");
  const [valid, setValid] = useState(true);

  const [passToggle, setPassToggle] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState(true);

  const [inputConfirmPass, set] = useState("");

  // signup data
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    batch: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { firstName, lastName, batch, email, password, error, success } = values;

  // to update values state
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  // Submit Button Function
  const onSubmit = (event) => {
    event.preventDefault(); // It will prevent the form from submitting itself so that we could do our regular stuff
    // console.log(firstName, lastName, batch, email, password);
    signup({ firstName, lastName, batch, email, password }) // It will automatically fires the request to the backend and return the respond & the error
      .then((data) => {
        // data is the response we're getting from signup function - backend
        if (data.error) {
          // checking if that response is the error or a valid data
          // it is the error then
          setValues({ ...values, error: data.error, success: false });
        } // if there was a success
        else {
          setValues({
            ...values,
            firstName: "",
            lastName: "",
            batch: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(error => {
        console.log("Error in Signup")});
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New account created successfully. Please <Link to="/">Login Here</Link>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const emailSx = {
    mr: 0.8,
    mt: 2.5,
    alignSelf: "start",
  };

  const flexStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    mb: 0.5,
  };

  const handleEmailValidation = (event) => {
    const nu_regex = new RegExp('[f0-9]+@[cfd]*\.nu\.edu\.pk')
    setValid(false)
    if (nu_regex.test(event.target.value)) {
      setValid(value => { return !valid});
      setValues({...values, batch: event.target.value.slice(1, 3), "email": event.target.value});
    }
  }

  // const handleEmailValidation = (event) => {
  //   const nu_regex = new RegExp('[f0-9]+@[cfd]*\.nu\.edu\.pk')
  //   setValid(false)
  //   if (nu_regex.test(event.target.value))
  //   {
  //     setValid(value => { return !valid});
  //     setValues({...values, email: event.target.value });
  //   }
  //   // setValues({...values, batch: event.target.value.slice(1, 3)});
  //   // setValues({...values, email: event.target.value});
  // };

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  const handlePasswordToggle = () => {
    setPassToggle((value) => !passToggle);
  };

  const handleConfirmPassword = () => {
    // if ()
    // setConfirmPassword(value => !confirmPassword)
  };

  return (
    <div>
      {successMessage()}
      {errorMessage()}
      <Box
        component="div"
        sx={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          component="form"
          sx={{
            width: 500,
            height: 250,
            background: "white",
            borderRadius: "10px",
            border: "1px solid #dfdcdc",
            flex: 1,
            mt: "10ch",
            mb: "10ch",
            p: "1ch 10ch 1ch 10ch",
          }}
        >
          <Box
            component="img"
            src="/images/Project Logo.jpeg"
            sx={{ height: 170, width: 250, ml: "4ch", mr: "4ch" }}
          ></Box>

          <Box sx={flexStyle}>
            <PersonIcon sx={{ ...emailSx }} />
            <TextField
              type="text"
              value={firstName}
              variant="standard"
              label="First Name"
              sx={{ width: "300px" }}
              onChange={handleChange("firstName")}
            />
          </Box>

          <Box sx={flexStyle}>
            <PersonIcon sx={{ ...emailSx }} />
            <TextField
              type="text"
              value={lastName}
              variant="standard"
              label="Last Name"
              sx={{ width: "300px" }}
              onChange={handleChange("lastName")}
            />
          </Box>

          <Box sx={flexStyle}>
            <Email sx={{ ...emailSx }} fontSize="small" />
            <TextField
              type="text"
              variant="standard"
              label="Email"
              sx={{ width: "300px" }}
              onChange={handleEmailValidation}
              helperText={valid ? "" : "Please Enter valid Email address"}
              error={valid ? false : true}
            />
          </Box>

          <Box sx={flexStyle}>
            <Lock sx={emailSx} fontSize="small" />
            <TextField
              type="password"
              value={password}
              variant="standard"
              label="Password"
              sx={{ width: 300 }}
              onChange={handleChange("password")}
            />
          </Box>

          {/* <Box sx={flexStyle}>
            <Lock sx={emailSx} fontSize="small" />
            <TextField
              type="password"
              variant="standard"
              label="Confirm Password"
              sx={{ width: 300 }}
              onBlur={handleConfirmPassword}
            />
          </Box> */}

          <Button
            variant="contained"
            sx={{ mt: 5, height: 48, width: "40ch" }}
            onClick={onSubmit}
          >
            Signup
          </Button>
        </Box>
      </Box>
    </div>
  );
}
