import React, { useState } from 'react';
import "../CSS/RequestForm.css"
import { Typography,Divider} from "@mui/material";


const RequestForm = () => {
  const [senderEmail, setSenderEmail] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [groupMember1, setGroupMember1] = useState('');
  const [groupMember2, setGroupMember2] = useState('');
  const [batch, setBatch] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic here

    // Reset form fields
    setSenderEmail('');
    setSupervisorName('');
    setProjectTitle('');
    setProjectDescription('');
    setGroupMember1('');
    setGroupMember2('');
    setBatch('');
  };

  return (
    <div> 
         <h1> 
         <Typography sx={{mb: "42px",mt: "131px", alignContent: "center",ml:"1%"}} component="h2" variant="h2">
           Send Request</Typography>
               <Divider sx=
        {{mt: "37px", mb: "40px",ml:"29ch",mr:"28ch", color: "black", borderColor: "#434F53",
        background: "transparent"}} variant="middle"/>
               </h1>
    <form id="request-form">
  <div>
    <label htmlFor="sender-email">Sender Email Address:</label>
    <input type="email" id="sender-email" name="sender-email" required />
  </div>
  <div>
    <label htmlFor="supervisor-name">Supervisor Name:</label>
    <select id="supervisor-name" name="supervisor-name" required>
      <option value="">Select a supervisor</option>
      <option value="Supervisor A">Supervisor A</option>
      <option value="Supervisor B">Supervisor B</option>
      <option value="Supervisor C">Supervisor C</option>
    </select>
  </div>
  <div>
    <label htmlFor="project-title">Title of Project:</label>
    <input type="text" id="project-title" name="project-title" required />
  </div>
  <div>
    <label htmlFor="project-description">Description:</label>
    <textarea id="project-description" name="project-description" required></textarea>
  </div>
  <div>
    <label htmlFor="group-members">Group Members Roll Numbers:</label>
    <input type="text" id="group-members1" name="group-members1" required placeholder="Roll Number 1" />
    <input type="text" id="group-members2" name="group-members2" required placeholder="Roll Number 2" />
  </div>
  <div>
    <label htmlFor="batch">Batch:</label>
    <input type="text" id="batch" name="batch" required />
  </div>
  <div>
    <button type="submit">Submit Request</button>
  </div>
</form>
</div>

 
  )}
  export default RequestForm;