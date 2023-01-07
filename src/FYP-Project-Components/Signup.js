import { Box, TextField, Button, Link, Typography, IconButton, InputAdornment } from "@mui/material"
import {React, useState} from "react"
import {Email, Lock, Person, Visibility, VisibilityOff} from "@mui/icons-material"
import MenuItem from "@mui/material/MenuItem"
import {makeStyles,styled} from "@mui/material/"

import theme from "../theme"
import { margin, positions, textAlign } from "@mui/system"

export  default function Signup(){
  
  const roleArray = ["Supervisor", "Student", "Admin"]

  const [role, setRole] = useState("Student")
  const [valid, setValid] = useState(true)

  const [passToggle, setPassToggle] = useState(true)

  const [confirmPassword, setConfirmPassword] = useState(true)

  const [inputConfirmPass, set] = useState("")

  const emailSx = {
    mr: 0.8,
    mt: 2.5,
    alignSelf: "start"
  }

  const flexStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    mb: 0.5
  }

  const handleEmailValidation = (event) => {
    const nu_regex = new RegExp('[f0-9]+@[cfd]*\.nu\.edu\.pk')
    setValid(false)
    if (nu_regex.test(event.target.value)) {
      setValid(value => { return !valid})
    }
  }

  const handleRole = (event) => {
    setRole(event.target.value)
  }

  const handlePasswordToggle = () => {
    setPassToggle(value => !passToggle)
  }

  const handleConfirmPassword = () => {

    // if ()
    // setConfirmPassword(value => !confirmPassword)
  }

  return (
    <Box component="div" 
      sx={{height: "100vh", display: "flex",
       alignItems: "center", flexDirection: "column"}}>
      <Box component="form"
        sx={{
          width: 500,
          height: 250,
          background: "pink",
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
            <TextField type="text" variant="standard" label="First Name"
              sx={{width: "300px"}}
            />
          </Box>

          <Box sx={flexStyle}>
            <Email sx={{...emailSx}} />
            <TextField type="text" variant="standard" label="Email"
              sx={{width: "300px"}} onChange={handleEmailValidation}
              helperText={valid ? "" : "Please Enter valid Email address"}
              error={valid ? false : true}
            />
          </Box>

          <Box sx={flexStyle}>
            <Lock sx={emailSx}/>
            <TextField type="password" variant="standard"
            label="Password" sx={{width: 300}} />
          </Box>

          <Box sx={flexStyle}>
            <Lock sx={emailSx}/>
            <TextField type="password" variant="standard"
            label="Confirm Password" sx={{width: 300}} onBlur={handleConfirmPassword} />
          </Box>

          <Button variant="contained" sx={{mt: 5, height: 48, width: "40ch"}}>Signup</Button>
        </Box>
    </Box>
  )
}