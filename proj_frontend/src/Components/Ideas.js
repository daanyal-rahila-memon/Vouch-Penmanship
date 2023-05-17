import React, { useEffect, useState } from "react";
import SupervisorlabelsDropdown from "./SupervisorNamesDrpdown";
import Card from "./IdeaCard";
import { getAllIdeas, getSupervisorById } from "../auth/helper";

function Ideas() {
  const [cards, setCards] = useState([]);
  const [supervisorList, setSupervisorList] = useState({
    supervisors: [],
    supervisorListFlag: false,
  });

  //create an array of cards for applying
  useEffect(() => {
    console.log("in proj_frontend/src/Components/Ideas");
    async function fetchData() {
      const data = await getAllIdeas();
      setCards(data);
      console.log(cards);
      const supervisorListPromises = cards.map(async (card) => {
        return getSupervisorById(card.supervisor);
      });
      console.log(supervisorListPromises);
      Promise.all(supervisorListPromises).then(async (values) => {
        console.log(values);
        const data = await values;
        setSupervisorList({
          ...supervisorList,
          supervisors: data,
          supervisorListFlag: true,
        });
      });
      if (supervisorList.supervisorListFlag) {
        console.log(
          `supervisorList.supervisors : ${JSON.stringify(
            supervisorList.supervisors
          )}`
        );
      }
    }
    fetchData();
  }, []);
  return supervisorList.supervisorListFlag ? (
    <div style={{ alignContent: "center" }}>
      <div
        className="card-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "5px",
          // justifyContent:"space-between",
          alignItems: "center",
          justifyContent: "center",
          padding: "3%",
        }}
      >
        <SupervisorlabelsDropdown />
      </div>
      <div className="Ideas">
        <div
          className="card-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "5px",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {cards.map((card, index) => {
            return (
              <Card
                title={card.title}
                description={card.description}
                // supervisor={supervisorList.supervisors[index]}
                // imageSrc={card.imageSrc}
                // buttonLabel1={card.buttonLabel1}
              />
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Ideas;
