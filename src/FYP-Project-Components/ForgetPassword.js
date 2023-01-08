import { Box, TextField, Button} from "@mui/material"
import {React, useState} from "react"
import {Email} from "@mui/icons-material"


  
  
const ForgotPassword = () =>
{
  const [valid, setValid] = useState(true)


  const emailSx = {
    mr: 0.8,
    mt: 2.5,
    alignSelf: "start"
  }

  const flexStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  }

  const handleEmailValidation = (event) => {
    const nu_regex = new RegExp('[f0-9]+@[cfd]*\.nu\.edu\.pk')
    setValid(false)
    if (nu_regex.test(event.target.value)) {
      setValid(value => { return !valid})
    }
  }

  const goToFind = () => {
    // navigate('/Gallery', {
    //   state: {role}
    // })
  }

  return (
    <Box component="div" 
      sx={{height: "100vh", display: "flex",
       alignItems: "center", flexDirection: "column"}}>
      <Box component="form"
        sx={{
          width: 500,
          height: 250,
          background: "white",
          borderRadius: "10px",
          flex: 1,
          mt: "10ch",
          mb: "10ch",
          p: "1ch 10ch 1ch 10ch"
        }}
      >
      <Box component="img" src="/images/Project Logo.jpeg"
       sx={{height: 170, width: 250, ml: "4ch", mr: "4ch"}}>

      </Box>
          <Box sx={flexStyle}>
            <Email sx={{...emailSx}} />
            <TextField type="text" variant="standard" label="Email"
              sx={{width: "300px"}} onChange={handleEmailValidation}
              helperText={valid ? "" : "Please Enter valid Email address"}
              error={valid ? false : true}
            />
          </Box>
          <Button onClick={goToFind} variant="contained" sx={{mt: 5, height: 48, width: "40ch"}}>Search</Button>
        </Box>
    </Box>
  )
}

export default ForgotPassword