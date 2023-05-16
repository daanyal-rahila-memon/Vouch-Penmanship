import React from "react";
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined"
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1"
import { Box, Divider, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import Paper from "@mui/material/Paper"
import { motion } from "framer-motion"
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
function Admin()
{const handleClick = (event) => {

}
    return(
        <div>
          <h1> 
    <Typography sx={{mb: "44px",mt: "130px", alignContent: "center",ml:"1%"}} component="h2" variant="h2">
       Admin Module</Typography>
          <Divider sx=
   {{mt: "45px", mb: "20px",ml:"27ch",mr:"26ch", color: "black", borderColor: "#434F53",
   background: "transparent"}} variant="middle"/>
          </h1> 
             <Box sx={{ display: "flex", mt: "8%" }} justifyContent="center">
          <motion.div
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 },
            }}
          >
            <Grid sx={{ mr: "20px" }}>
              <Paper
                elevation={10}
                sx={{ height: "220px", width: "360px", borderRadius: "15px" }}
              >
                <Box>
                  <Button
                    sx={{
                      m: "69px 6px 50px 53px",
                      height: "7.2ch",
                      width: "24ch",
                      fontSize: "19px",
                    }}
                    aria-describedby={""}
                    variant="contained"
                    onClick={handleClick}
                    startIcon={<PersonAddAlt1Icon fontSize="large" />}
                  >
                   Add Supervisor
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 0.9,
              transition: { duration: 0.3 },
            }}
          >
            <Grid sx={{ mr: "20px" }}>
              <Paper
                elevation={10}
                sx={{ height: "220px", width: "360px", borderRadius: "15px" }}
              >
                <Box>
                  <Button
                    sx={{
                        m: "69px 6px 50px 53px",
                        height: "7.2ch",
                        width: "24ch",
                        fontSize: "19px",
                    }}
                    aria-describedby={""}
                    variant="contained"
                    onClick={handleClick}
                    startIcon={<ManageAccountsIcon fontSize="Large" />}
                  >
                   Manage Accounts
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </motion.div>

         
          </Box>
        </div>
    )
}
export default Admin;