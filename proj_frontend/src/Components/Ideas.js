import React, { useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllSupervisors, getIdeasBySupervisorId } from "../auth/helper";
import IdeaCard from "./IdeaCard";

const Ideas = ({ role, loginCredentials }) => {
  const [supervisor, setSupervisor] = useState("");
  const [supervisorList, setSupervisorList] = useState([]);
  const [valid, setValid] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const get = async () => {
      const supList = await getAllSupervisors();

      if (JSON.stringify(supervisorList) !== JSON.stringify(supList)) {
        // console.log("Did not match")
        setSupervisorList(supList);
        // console.log(`superList : ${JSON.stringify(supList)}`)
      }
    };

    get();
  }, [supervisorList]);

  if (valid) {
    const get = async () => {
      console.log(supervisor);
      const data = await getIdeasBySupervisorId(supervisor._id);
      console.log(data);
      setIdeas(data);
      setValid(false);
    };
    get();
  }

  const handleSupervisorChange = (event) => {
    const selectedSupervisor = event.target.value;
    setSupervisor(selectedSupervisor);
    setValid(true);
    setToggle(true);
    // console.log(JSON.stringify(selectedSupervisor));
  };

  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", paddingTop: "30px" }}>
      <FormControl fullWidth margin="normal" required>
        <InputLabel id="supervisor-label">Supervisor</InputLabel>
        <Select
          labelId="supervisor-label"
          id="supervisor"
          value={supervisor}
          onChange={handleSupervisorChange}
          label="Supervisor"
          variant="outlined"
        >
          {supervisorList.map((supervisor) => (
            <MenuItem key={supervisor._id} value={supervisor}>
              {supervisor.firstName + " " + supervisor.lastName}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Please select a supervisor</FormHelperText>
      </FormControl>
      {toggle  && ideas.map((idea) => {
        return (
          <IdeaCard supervisor={idea}/>
        )
      })}
    </div>
  );
};

export default Ideas;
