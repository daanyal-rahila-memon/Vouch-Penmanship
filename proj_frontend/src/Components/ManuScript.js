import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Popover from "@mui/material/Popover";
import { Box, Divider, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
const { setDocument, getDocument } = require("../auth/helper/index");

const ManuScript = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [file, setFile] = React.useState(null);
  const [values, setValues] = React.useState({
    title: "Temp Screenshot",
    category: "641d9a3fd64567a22867dbb9",
    description: "Temp Screenshot",
    document: file,
  });

  const { title, category, description, document } = values;
  const [documents, setDocuments] = React.useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
    if (file !== null) {
      postRequestToSetDocument();
    }
  };

  const postRequestToSetDocument = () => {
    setDocument({ ...values, document: file })
      .then((data) => {
        if (data.error) {
          // console.log("IN DATA.ERROR");
        } else {
          // console.log("NOT IN DATA.ERROR");
        }
      })
      .catch(console.log("Manuscript upload failed"));
  };

  const postRequestToGetDocument = () => {
    // console.log("in postRequestToGetDocument");
    getDocument().then((response) => {
      console.log("response => ",response[0]?.document?.data)
      let pdf=new Buffer.from(response[0]?.document?.data).toString("base64")
      console.log("data:image/pdf;base64"+pdf)
      setDocuments(response[1]?.document?.data?.data);
      if (response.error) {
        console.log("IN DATA.ERROR");
      } else {
        console.log("NOT IN DATA.ERROR");
      }
    });
  };

  const [toggle, setToggle] = React.useState(false);

  const FileView = () => {
    console.log(documents);
    const blob = new Blob([new Uint8Array(documents)], {
      type: "image/png",
    });
    const url = URL.createObjectURL(blob);
    console.log(url)
    setToggle(true);
    return (
      <ul>
        {/* <img src={url} alt="File from backend" /> */}
        {/* <div>
          <embed
            src={url}
            type="application/pdf"
            width="100%"
            height="600px"
          ></embed>
        </div> */}
        <img src={url} alt="image" />
      </ul>
    );
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Box sx={{ display: "flex", mt: "335px" }} justifyContent="center">
        <motion.div
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.3 },
          }}
        >
          <Grid sx={{ mr: "20px" }}>
            <Paper
              elevation={10}
              sx={{ height: "300px", width: "420px", borderRadius: "15px" }}
            >
              <Box>
                <Button
                  sx={{
                    m: "105px 0px 100px 90px",
                    height: "9.6ch",
                    width: "25ch",
                    fontSize: "18px",
                  }}
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                  startIcon={<PersonAddAlt1Icon fontSize="large" />}
                >
                  Add member
                </Button>
              </Box>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography
                  sx={{ mt: "2ch", textAlign: "center", mb: "1.5ch" }}
                >
                  Invite Memebers
                </Typography>
                <Divider variant="middle" />
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="flex-end"
                  sx={{ p: "0ch 5ch 5ch 5ch" }}
                >
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                  />
                  <Button
                    variant="contained"
                    component="label"
                    sx={{ height: "4ch", width: "10ch" }}
                  >
                    Add
                  </Button>
                </Stack>
              </Popover>
            </Paper>
          </Grid>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.3 },
          }}
        >
          <Grid>
            <Paper
              elevation={10}
              sx={{
                alignContent: "center",
                height: "300px",
                width: "420px",
                borderRadius: "15px",
              }}
            >
              <Box>
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    m: "105px 0px 100px 90px",
                    height: "9.6ch",
                    width: "25ch",
                    fontSize: "18px",
                  }}
                >
                  <UploadFileOutlinedIcon
                    fontSize="medium"
                    sx={{ mr: "4px" }}
                  />
                  <input
                    hidden
                    onChange={handleFileUpload}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                  Add ManuScript
                </Button>
              </Box>
            </Paper>
          </Grid>
        </motion.div>
      </Box>
      <button className="button ptimary" onClick={postRequestToGetDocument}>
        {" "}
        Click here to Get Data
      </button>
      {<FileView/>}
    </div>
  );
};

export default ManuScript;
