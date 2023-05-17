import React, { useState } from "react";
import "../CSS/ManageAccount.css";
import { Typography, Divider } from "@mui/material";
import { manageAccount } from "../auth/helper";

const ManageAccount = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedOption === "") {
      setError("Please select a role");
      return;
    }

    if (email === "") {
      setError("Please enter an email");
      return;
    }

    // Perform access control logic based on selectedOption and email
    // console.log("Selected Option:", selectedOption);
    // console.log("Email:", email);
    // console.log("Status:", status);

    manageAccount({selectedOption, email, status});
  };

  return (
    <div>
      <h1>
        <Typography
          sx={{ mb: "44px", mt: "130px", alignContent: "center", ml: "1%" }}
          component="h2"
          variant="h2"
        >
          Manage Accounts
        </Typography>
        <Divider
          sx={{
            mt: "45px",
            mb: "40px",
            ml: "27ch",
            mr: "26ch",
            color: "black",
            borderColor: "#434F53",
            background: "transparent",
          }}
          variant="middle"
        />
      </h1>
      <div className="manage-account-container">
        <form onSubmit={handleSubmit} style={{ padding: "40px" }}>
          <div className="dropdown-container">
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">Select a role</option>
              <option value="student">Student</option>
              <option value="supervisor">Supervisor</option>
            </select>
          </div>
          <div className="email-container">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="error-message">{error}</div>
          <div className="buttons-container">
            <button
              type="submit"
              onClick={() => setStatus(true)}
              className="access-button"
            >
              Give Access
            </button>
            <button
              type="submit"
              onClick={() => setStatus(false)}
              className="deny-button"
            >
              Denied Access
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageAccount;
