import React from "react";
import { Button } from "@mui/material";

const Card = ({ title, description, supervisor, imageSrc, buttonLabel1, buttonLabel2 }) => {
  return (
    <div
      className="card"
      style={{
        background: "rgba(237, 237, 237,0.2)",
        width: "25%",
        marginRight: "1%",
        marginLeft: "1%",
        marginBottom: "20px",
        marginTop: "5px",
      }}
    >
      {/* <div className="card-image">
        <img src={imageSrc} alt={title} style={{ width: "100%" }} />
      </div> */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-description">{supervisor}</p>
        <div className="card-buttons">
          <Button
            className="ideacardbtn"
            style={{ marginRight: "5px", padding: "3px" }}
          >
            {buttonLabel1}
          </Button>
          {/* <button  className="ideacardbtn"style={{marginRight:"5px",padding:"3px"}}>{buttonLabel2}</button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
