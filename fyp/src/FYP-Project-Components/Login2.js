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

  // const [inputEmail, setInputEmail] = useState("")

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

  const handleRole = (event) => {
    setRole(event.target.value)
  }

  const handlePasswordToggle = () => {
    setPassToggle(value => !passToggle)
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

          <Box sx={flexStyle}>
            <Lock sx={emailSx}/>
            <TextField type="password" variant="standard" autoComplete="current-password"
            label="Password" sx={{width: 300}} />
          </Box>

          <Link sx={{cursor: "pointer",mt: "0.8ch" ,textAlign: "end"}}>
                Forget Password?
          </Link>

          <Box sx={{...flexStyle, mt: "1ch"}}>
            <Person sx={emailSx}/>
            <TextField
              label="Role" variant="standard"
              select value={role}
              sx={{width: "20ch", textAlign: "start"}} onChange={handleRole}>
              {roleArray.map(option => {
                return (<MenuItem key={option} value={option}>{option}</MenuItem>)
              })}
            </TextField>
          </Box>

          <Button variant="contained" sx={{mt: 5, height: 48}}>Login</Button>
          <Typography component="p" sx={{mt: 1.5, textAlign: "start"}}>
            Don’t have an account already? 
            <Link sx={{cursor: "pointer", mb: 2, pl: 0.5}}>
                SignUp
            </Link>
          </Typography>
        </Box>
    </Box>
  )
}