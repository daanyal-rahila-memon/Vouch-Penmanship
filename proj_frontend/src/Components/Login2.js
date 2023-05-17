import { Box, TextField, Button, Link, Typography } from "@mui/material"
import { React, useEffect, useState } from "react"
import { Email, Lock, Person } from "@mui/icons-material"
import MenuItem from "@mui/material/MenuItem"
import { CircularProgress } from "@mui/material"
import { Link as RouterLink, useNavigate } from "react-router-dom"

import { signin, authenticate, isAuthenticated } from "../auth/helper"

export default function Signin() {
    const [roles, setRoles] = useState("Student")
    const [emailValidation, setEmailValidation] = useState(true)
    const [passwordValidation, setPasswordValidation] = useState(true)
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [values, setValues] = useState({
        role: "student",
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false, // use to know if the user has been redirect to any other page, hence signed-in
    })
    const { role, email, password, error, loading, didRedirect } = values

    const navigate = useNavigate()

    // storing JSON.parse(localStorage.getItem('jwt')) returning from isAuthenticated() in src/auth/helper/index.js
    const { user } = isAuthenticated()

    // to update values state
    const handleChange = (name) => (event) => {
        setPasswordValidation(false)
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const handleEmailValidation = (event) => {
        setEmailValidation(false)
        if (roles == "student") {
            const nu_regex = new RegExp("[f0-9]+@[cfd]*.nu.edu.pk")
            if (nu_regex.test(event.target.value)) {
                setEmailValidation((value) => {
                    return !emailValidation
                })
                setValues({ ...values, email: event.target.value })
            }
        } else {
            const nu_regex = new RegExp("^[a-zA-Z].*@([cfd]*.nu.edu.pk)$")
            if (nu_regex.test(event.target.value)) {
                setEmailValidation((value) => {
                    return !emailValidation
                })
                setValues({ ...values, email: event.target.value })
            }
        }
    }

    useEffect(() => {
        const performRedirect = () => {
            // console.log("Performing redirect with didredirect" + didRedirect);
            if (didRedirect) {
                setIsLoading(false)
                // console.log(user.role);
                if (user && user.role == "admin") {
                    // Admin
                    console.log("ADMIN")
                    return <p>Redirect to Admin</p>
                } else {
                    console.log(roles)
                    setLoggedIn(!isLoggedIn)
                    console.log(`After submitting value : ${!isLoggedIn}`)
                    navigate("/gallery", {
                        state: {
                            Role: role,
                            isLoggIn: !isLoggedIn,
                            LoginCredentials: values,
                        },
                    })
                }
            }
        }
        performRedirect()
    }, [values])

    const onSubmit = (event) => {
        // console.log(values);
        setIsLoading(true)
        if (email !== "" && password !== "" && password.length >= 6) {
            event.preventDefault()
            setIsLoading(true)
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
                        alert("sign request failed")
                    } else {
                        // console.log("NOT IN DATA.ERROR");
                        setIsLoading(true)
                        authenticate(data, () => {
                            setValues({ ...values, didRedirect: true })
                            //   performRedirect();
                        })
                    }
                })
                .catch(console.log("signin reques failed"))
        } else if (email == "") {
            setEmailValidation(false)
            setIsLoading(false)
        } else if (password == "" || password.length < 6) {
            setPasswordValidation(false)
            setIsLoading(false)
        } else {
            setIsLoading(false)
            setEmailValidation(false)
            setPasswordValidation(false)
        }
    }

    const roleArray = ["Supervisor", "Student", "Admin"]

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

    return (
        <Box
            component="div"
            sx={{
                height: "100vh",
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
                    mb: "14ch",
                    p: "1ch 10ch 1ch 10ch",
                    backgroundColor: "white",
                    border: "1px solid #dfdcdc",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    borderRadius: "16px",
                }}
            >
                <Box
                    component="img"
                    src="/images/VouchPenmanship.png"
                    sx={{
                        mt: "5ch",
                        height: 100,
                        width: 180,
                        ml: "8ch",
                        mr: "4ch",
                    }}
                ></Box>
                <Box sx={{ ...flexStyle, mt: "3ch" }}>
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
                            emailValidation
                                ? ""
                                : "Please Enter valid Email address"
                        }
                        error={emailValidation ? false : true}
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
                        error={
                            passwordValidation || values.password.length > 5
                                ? false
                                : true
                        }
                        helperText={
                            values.password === ""
                                ? "Please Enter password"
                                : values.password.length < 6
                                ? "Your password must containt 6 characters"
                                : ""
                        }
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
                    disabled={isLoading}
                >
                    {isLoading ? <CircularProgress size={24} /> : "Login"}
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
