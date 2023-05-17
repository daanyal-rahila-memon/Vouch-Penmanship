import React, { useState } from "react";
import { Typography, Divider } from "@mui/material";
import { signup } from "../auth/helper";

const AddSupervisor = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("supervisor");
  const [department, setDepartment] = useState("");
  const [expertise, setExpertise] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary validation and submit the form
    // For this example, we'll just log the form data
    console.log({
      firstName,
      lastName,
      role,
      department,
      expertise,
      email,
      password,
    });

    // Clear form fields
    setFirstName("");
    setLastName("");
    setDepartment("");
    setExpertise("");
    setEmail("");
    setPassword("");

    signup({
      firstName,
      lastName,
      role,
      department,
      expertise,
      email,
      password,
    }) // It will automatically fires the request to the backend and return the respond & the error
      .then((data) => {
        // data is the response we're getting from signup function - backend
        if (data.error) {
          // checking if that response is the error or a valid data
          // it is the error then
          console.log(data.error);
        } // if there was a success
        else {
          console.log("Succeed");
        }
      })
      .catch((error) => {
        console.log("Error in Signup");
      });
  };

  return (
    <div>
      <h1>
        <Typography
          sx={{ mb: "44px", mt: "130px", alignContent: "center", ml: "1%" }}
          component="h2"
          variant="h2"
        >
          Add Supervisor
        </Typography>
        <Divider
          sx={{
            mt: "50px",
            mb: "40px",
            ml: "30ch",
            mr: "30ch",
            color: "black",
            borderColor: "#434F53",
            background: "transparent",
          }}
          variant="middle"
        />
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="expertise">Expertise:</label>
          <input
            type="text"
            id="expertise"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Add Supervisor</button>
      </form>
    </div>
  );
};

export default AddSupervisor;
