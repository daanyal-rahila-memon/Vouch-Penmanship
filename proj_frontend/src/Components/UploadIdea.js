import React, { useState } from "react";
import "../CSS/UploadIdea.css";
import { Typography, Divider } from "@mui/material";
import { createIdea } from "../auth/helper";

const UploadIdea = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploadDate, setUploadDate] = useState("");
  const [validity, setValidity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit Logic
    console.log("Form submitted:", {
      title,
      category,
      description,
      uploadDate,
      validity,
    });

    if (title.trim() === "") {
      console.log("Title is required.");
      return;
    }
    if (category.trim() === "") {
      console.log("Category is required.");
      return;
    }
    if (description.trim() === "") {
      console.log("Description is required.");
      return;
    }
    if (uploadDate.trim() === "") {
      console.log("Upload Date is required.");
      return;
    }
    if (validity.trim() === "") {
      console.log("Validity is required.");
      return;
    }

    // If all validations pass, proceed with submitting the form
    await createIdea({
      title,
      category,
      description,
      uploadDate,
      validity,
    })
      .then((data) => {
        if (data.error) {
          console.log("IN DATA.ERROR");
        } else {
          console.log("NOT IN DATA.ERROR");
        }
      })
      .catch(console.log("Idea upload failed"));
  };

  return (
    <div>
      <h1>
        <Typography
          sx={{ mb: "44px", mt: "130px", alignContent: "center", ml: "1%" }}
          component="h2"
          variant="h2"
        >
          Upload Ideas
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
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="uploadDate">Upload Date:</label>
          <input
            type="date"
            id="uploadDate"
            value={uploadDate}
            onChange={(e) => setUploadDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="validity">Validity:</label>
          <input
            type="date"
            id="validity"
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadIdea;
