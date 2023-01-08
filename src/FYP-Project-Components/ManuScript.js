import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Popover from '@mui/material/Popover';
import { Box } from '@mui/system';


  
const ManuScript = () =>
{
  
  return (
    <>

    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
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
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
    
    <Box>
      <Box>
        <Button variant="contained" component="label" sx={{}}>
          <UploadFileOutlinedIcon sx={{}} />
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Box>

      <Box>
        <Button variant="outlined" startIcon={<PersonAddAlt1Icon />}>
            Add member
        </Button>
      </Box>
    </Box>
    </>
    
  )
}

export default ManuScript