import { Box, TextField, Button, Link, Typography} from "@mui/material"
import { React, useState } from "react"
import { Email, Lock, Person } from "@mui/icons-material"
import MenuItem from "@mui/material/MenuItem"
import { makeStyles, styled } from "@mui/material/"

import theme from "../theme"
import { margin, positions, textAlign } from "@mui/system"

import { Link as RouterLink, useNavigate, Navigate } from "react-router-dom"
import Gallery from "./Gallery"

import { signin, authenticate, isAuthenticated } from "../auth/helper"

export default function Signin()
{
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false      // use to know if the user has been redirect to any other page, hence signed-in
  });

  const { email, password, error, loading, didRedirect } = values;

  // storing JSON.parse(localStorage.getItem('jwt')) returning from isAuthenticated() in src/auth/helper/index.js
  const { user } = isAuthenticated();

  // to update values state
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({...values, error: false, loading: true });
    signin({email, password})
    .then(data => {
      if (data.error)
      {
        setValues({...values, error: data.error, loading: false });
      }
      else
      {
        authenticate(data, () => {
          setValues({...values, didRedirect: true});
        })
      }
    })
    .catch(console.log("Signin request failed"));
  }

  const performRedirect = () => {
    if (didRedirect)
    {
      if (user && user.role === 0)      // Admin
      {
        return <p>Redirect to Admin</p>
      }
      else
      {
        return <p>Redirect to User Dashboard</p>
      }
    }

    if (isAuthenticated())
    {
      return <Navigate to="/" />
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const roleArray = ["Supervisor", "Student", "Admin"]

  const navigate = useNavigate();
  const [role, setRole] = useState("Student")
  const [valid, setValid] = useState(true)

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

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
      setValid(value => { return !valid});
      setEmail(event.target.value);
    }
  }

  const handleRole = (event) => {
    setRole(event.target.value)
  }

  const handlePassword = (event) => {
    setPassToggle(value => !passToggle);
    setPassword(event.target.value);
  }

  const goToGallery = () => {
    if (valid)
    {
      console.log(email, password);
      navigate('/Gallery', {
        state: {role}
      })
    }
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
          p: "1ch 10ch 1ch 10ch",
          backgroundColor: "pink"
        }}
      >
        {loadingMessage()}
        {errorMessage()}
      <Box component="img" src="/images/Project Logo.jpeg"
       sx={{height: 170, width: 250, ml: "4ch", mr: "4ch"}}>

      </Box>

          <Box sx={{...flexStyle, mt: "1ch"}}>
            <Person sx={emailSx}/>
            <TextField
              label="Role" variant="standard"
              select value={role}
              sx={{flex: 1, textAlign: "start"}} onChange={handleRole}>
              {roleArray.map(option => {
                return (<MenuItem key={option} value={option}>{option}</MenuItem>)
              })}
            </TextField>
          </Box>

          <Box sx={flexStyle}>
            <Email sx={{...emailSx}} fontSize="small"/>
            <TextField type="text" variant="standard" label="Email"
              sx={{width: "300px"}} onChange={handleEmailValidation}
              helperText={valid ? "" : "Please Enter valid Email address"}
              error={valid ? false : true}
            />
          </Box>

          <Box sx={{...flexStyle, mb: "0.6ch"}}>
            <Lock sx={emailSx} fontSize="small"/>
            <TextField type="password" variant="standard" autoComplete="current-password"
            label="Password" sx={{width: 300}} onChange={handlePassword} />
          </Box>

          <Link component={RouterLink} to="/ForgetPassword"
            sx={{pl: "21.4ch", cursor: "pointer",
             textAlign: "end"}}>
                Forget Password?
          </Link>

          <Button onClick={goToGallery} variant="contained" sx={{mt: 5,ml: 2, height: 48, width: "38ch"}}>Login</Button>
          
          <Typography component="p" sx={{mt: 1.5, textAlign: "start"}}>
            Don’t have an account already? 
            <Link component={RouterLink} to="/signUp" sx={{cursor: "pointer", mb: 2, pl: 0.5}} onClick={onSubmit}>
               SignUp
            </Link>
          </Typography>
        </Box>
        {performRedirect()}
    </Box>
  )
}