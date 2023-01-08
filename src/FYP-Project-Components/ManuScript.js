import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Popover from '@mui/material/Popover';
import { Box, Divider, TextField, Typography} from '@mui/material';




  
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
    <>
    <Box display={{display: "flex", flexDirection: "column", alignItems: "start"}}>
      <Box>
        <Button aria-describedby={id} variant="contained" onClick={handleClick} startIcon={<PersonAddAlt1Icon />}>
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
      <Box sx={{mt: "40ch", alignSelf: "center"}}>
        <Button variant="contained" component="label" sx={{height: "12ch",  width: "30ch"}}>
          <UploadFileOutlinedIcon sx={{height: "8ch",  width: "20ch"}} />
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Box>
    </Box>

    </>
    
  )
}

export default ManuScript