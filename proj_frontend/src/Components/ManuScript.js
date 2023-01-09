import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Popover from '@mui/material/Popover';
import { Box, Divider, TextField, Typography} from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2"
import Paper from "@mui/material/Paper"
import {motion} from "framer-motion"



  
const ManuScript = () =>
{
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
 
  return (
    <Box sx={{display: "flex", mt: "335px"}} justifyContent="center">
      <motion.div
        whileHover={{
          scale: 0.9, transition:{duration: 0.3}
          }}>
        <Grid sx={{mr: "20px"}}>
          <Paper elevation={10} sx={{height: "300px", width: "420px", borderRadius: "15px"}}>
          <Box>
            <Button sx={{m: "105px 0px 100px 90px", height: "9.6ch",  width: "25ch", fontSize: "18px" }} aria-describedby={id} variant="contained" onClick={handleClick} startIcon={<PersonAddAlt1Icon  fontSize='large'/> }>
                Add member
            </Button>
        </Box>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ mt: "2ch", textAlign: "center", mb: "1.5ch"}}>Invite Memebers</Typography>
          <Divider  variant="middle"/>
          <Stack  direction="row" spacing={2} alignItems="flex-end" sx={{p: "0ch 5ch 5ch 5ch"} }>
            <TextField id="standard-basic" label="Email" variant="standard" />
            <Button variant="contained" component="label" sx={{height: "4ch",  width: "10ch"}}>
              Add
            </Button>

          </Stack>
        </Popover>
          </Paper>
        </Grid>
      </motion.div>


      <motion.div
        whileHover={{
          scale: 0.9, transition:{duration: 0.3}
          }}>
            
        <Grid>
          <Paper  elevation={10} sx={{alignContent: "center",height: "300px", width: "420px", borderRadius: "15px"}}>
            <Box>
              <Button variant="contained" component="label" sx={{m: "105px 0px 100px 90px", height: "9.6ch",  width: "25ch", fontSize:"18px" }}>
                <UploadFileOutlinedIcon fontSize='medium' sx={{mr: "4px"}}/>
                <input hidden accept="image/*" multiple type="file" />
                Add ManuScript
              </Button>
            </Box>
          </Paper>
        </Grid>
      </motion.div>
    </Box>
    
  )
}

export default ManuScript