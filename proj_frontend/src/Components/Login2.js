import { Box, TextField, Button, Link, Typography } from "@mui/material"
import { React, useEffect, useState } from "react"
import { Email, Lock, Person } from "@mui/icons-material"
import MenuItem from "@mui/material/MenuItem"
import { makeStyles, styled } from "@mui/material/"

import theme from "../theme"
import { margin, positions, textAlign } from "@mui/system"

import { Link as RouterLink, useNavigate } from "react-router-dom"
import Gallery from "./Gallery"

import { signin, authenticate, isAuthenticated } from "../auth/helper"
import Particle from "./Particle"

export default function Signin() {
    const [roles, setRoles] = useState("student")
    const [valid, setValid] = useState(true)
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [values, setValues] = useState({
        role: "student",
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false, // use to know if the user has been redirect to any other page, hence signed-in
    })
    const { role, email, password, error, loading, didRedirect } = values

    // storing JSON.parse(localStorage.getItem('jwt')) returning from isAuthenticated() in src/auth/helper/index.js
    const { user } = isAuthenticated()

    // to update values state
    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const handleEmailValidation = (event) => {
        setValid(false)
        if (roles == "student") {
            const nu_regex = new RegExp("[f0-9]+@[cfd]*.nu.edu.pk")
            if (nu_regex.test(event.target.value)) {
                setValid((value) => {
                    return !valid
                })
                setValues({ ...values, email: event.target.value })
            }
        } else {
            const nu_regex = new RegExp("[f0-9]+@[cfd]*.nu.edu.pk")
            // const nu_regex = /^[\w.%+-]+@[cfd]*.nu.edu.pk$/
            if (nu_regex.test(event.target.value)) {
                setValid((value) => {
                    return !valid
                })
                setValues({ ...values, email: event.target.value })
            }
        }
    }

    const onSubmit = (event) => {
        // console.log(values);
        if (email !== "" && password !== "") {
            event.preventDefault()
            setValues({ ...values, error: false, loading: true })
            // console.log(values);
            signin({ role, email, password })
                .then((data) => {
                    if (data.error) {
                        // console.log("IN DATA.ERROR");
                        setValues({
                            ...values,
                            error: data.error,
                            loading: false,
                        })
                    } else {
                        // console.log("NOT IN DATA.ERROR");
                        authenticate(data, () => {
                            setValues({ ...values, didRedirect: true })
                            // console.log("ABOUT TO PERFORM_REDIRECT");
                            performRedirect()
                            loadingMessage()
                            errorMessage()
                        })
                    }
                })
                .catch(console.log("Sign-in request failed"))
        }
    }

    const performRedirect = () => {
        // console.log("Performing redirect with didredirect" + didRedirect);
        if (didRedirect) {
            // console.log(user.role);
            if (user && user.role == "admin") {
                // Admin
                console.log("ADMIN")
                return <p>Redirect to Admin</p>
            } else {
                console.log(roles)
                setLoggedIn(!isLoggedIn)
                navigate("/Gallery", {
                    state: { Role: role },
                })
            }
        }

        // if (isAuthenticated())
        // {
        //   return <Navigate to="/" />
        // }
    }

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }

    const errorMessage = () => {
        return (
            <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
            >
                {error}
            </div>
        )
    }

    const roleArray = ["Supervisor", "Student", "Admin"]

    const navigate = useNavigate()

    const [passToggle, setPassToggle] = useState(true)

    // const [inputEmail, setInputEmail] = useState("")

    const emailSx = {
        mr: 0.8,
        mt: 2.5,
        alignSelf: "start",
    }

    const flexStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
    }

    const handleRole = (event) => {
        setRoles(event.target.value)
        if (event.target.value === "Admin") {
            setValues({ ...values, role: "admin" })
        } else if (event.target.value === "Student") {
            setValues({ ...values, role: "student" })
        } else {
            setValues({ ...values, role: "supervisor" })
        }
    }

    // const handlePassword = (event) => {
    //   setPassToggle(value => !passToggle);
    //   setPassword(event.target.value);
    // }

    if (isLoggedIn) {
        navigate("/Gallery", {
            state: { Role: role },
        })
    }
    return (
        <Box
            component="div"
            sx={{
                height: "80vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Box
                component="form"
                sx={{
                    width: 500,
                    height: 250,
                    background: "white",
                    borderRadius: "10px",
                    flex: 1,
                    mt: "10ch",
                    mb: "10ch",
                    p: "1ch 10ch 1ch 10ch",
                    backgroundColor: "white",
                    border: "1px solid #dfdcdc",
                }}
            >
                <Box
                    component="img"
                    src="/images/Project Logo.jpeg"
                    sx={{ height: 170, width: 250, ml: "4ch", mr: "4ch" }}
                ></Box>
                <Box sx={{ ...flexStyle, mt: "1ch" }}>
                    <Person sx={emailSx} />
                    <TextField
                        label="Role"
                        variant="standard"
                        select
                        value={roles}
                        sx={{ flex: 1, textAlign: "start" }}
                        onChange={handleRole}
                    >
                        {roleArray.map((option) => {
                            return (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            )
                        })}
                    </TextField>
                </Box>

                <Box sx={flexStyle}>
                    <Email sx={{ ...emailSx }} fontSize="small" />
                    <TextField
                        type="text"
                        variant="standard"
                        label="Email"
                        sx={{ width: "300px" }}
                        onChange={handleEmailValidation}
                        helperText={
                            valid ? "" : "Please Enter valid Email address"
                        }
                        error={valid ? false : true}
                    />
                </Box>

                <Box sx={{ ...flexStyle, mb: "0.6ch" }}>
                    <Lock sx={emailSx} fontSize="small" />
                    <TextField
                        type="password"
                        variant="standard"
                        autoComplete="current-password"
                        label="Password"
                        sx={{ width: 300 }}
                        onChange={handleChange("password")}
                    />
                </Box>

                {/* <Link component={RouterLink} to="/ForgetPassword"
            sx={{pl: "21.4ch", cursor: "pointer",
             textAlign: "end"}}>
                Forget Password?
          </Link> */}

                <Button
                    onClick={onSubmit}
                    variant="contained"
                    sx={{ mt: 5, ml: 2, height: 48, width: "38ch" }}
                >
                    Login
                </Button>

                <Typography
                    component="p"
                    sx={{ mt: 1.5, ml: 3.2, textAlign: "start" }}
                >
                    Don’t have an account already?
                    <Link
                        component={RouterLink}
                        to="/signup"
                        sx={{ cursor: "pointer", mb: 2, pl: 0.5 }}
                    >
                        Sign Up
                    </Link>
                </Typography>
            </Box>
        </Box>
    )
}
