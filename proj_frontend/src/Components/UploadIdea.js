import React, { useState } from 'react';
import "../CSS/UploadIdea.css";
import { Typography,Divider} from "@mui/material";

const UploadIdea = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [description, setDescription] = useState('');
  const [uploadDate, setUploadDate] = useState('');
  const [validity, setValidity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
    console.log('Form submitted:', {
      title,
      category,
      supervisor,
      description,
      uploadDate,
      validity,
    });
  };

  return (
    <div>

      <h1> 
         <Typography sx={{mb: "44px",mt: "130px", alignContent: "center",ml:"1%"}} component="h2" variant="h2">
            Upload Ideas</Typography>
               <Divider sx=
        {{mt: "50px", mb: "40px",ml:"30ch",mr:"30ch", color: "black", borderColor: "#434F53",
        background: "transparent"}} variant="middle"/>
               </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="supervisor">Supervisor Name:</label>
          <input
            type="text"
            id="supervisor"
            value={supervisor}
            onChange={(e) => setSupervisor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="uploadDate">Upload Date:</label>
          <input
            type="date"
            id="uploadDate"
            value={uploadDate}
            onChange={(e) => setUploadDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="validity">Validity:</label>
          <input
            type="date"
            id="validity"
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadIdea;
