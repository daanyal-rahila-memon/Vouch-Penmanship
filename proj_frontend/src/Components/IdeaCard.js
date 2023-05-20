import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

const IdeaCard = (ideas) => {
// const [Ideas, setIdeas] = useState(ideas.supervisor);
  // console.log(ideas.supervisor);
  console.log(ideas.supervisor);

  // const cards = ideas.supervisor.map
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
        <div className="card-content">
          <h3 className="card-title">{ideas.supervisor.title}</h3>
          <p className="card-description">{ideas.supervisor.category}</p>
          <p className="card-description">{ideas.supervisor.description}</p>
          <p className="card-description">{ideas.supervisor.uploadDate}</p>
          <p className="card-description">{ideas.supervisor.validity}</p>
          <div className="card-buttons">
            {/* <Button
              className="ideacardbtn"
              style={{ marginRight: "5px", padding: "3px" }}
            >
              {buttonLabel1}
            </Button> */}
            {/* <button  className="ideacardbtn"style={{marginRight:"5px",padding:"3px"}}>{buttonLabel2}</button> */}
          </div>
        </div>
      </div>
  );
};

export default IdeaCard;
