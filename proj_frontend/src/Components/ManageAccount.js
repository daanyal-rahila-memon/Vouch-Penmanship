import React, { useState } from 'react';
import '../CSS/ManageAccount.css';
import { Typography,Divider} from "@mui/material";


const ManageAccount = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [email, setEmail] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform access control logic based on selectedOption and email
    console.log('Selected Option:', selectedOption);
    console.log('Email:', email);
  };

  return (
    <div > <h1> 
    <Typography sx={{mb: "44px",mt: "130px", alignContent: "center",ml:"1%"}} component="h2" variant="h2">
       Manage Accounts</Typography>
          <Divider sx=
   {{mt: "45px", mb: "40px",ml:"27ch",mr:"26ch", color: "black", borderColor: "#434F53",
   background: "transparent"}} variant="middle"/>
          </h1> 
    <div className="manage-account-container" >
      <form onSubmit={handleSubmit} style={{ padding: "40px"}}>
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
        <div className="buttons-container">
          <button type="submit" className="access-button">
            Give Access
          </button>
          <button type="submit" className="deny-button">
            Denied Access
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ManageAccount;
