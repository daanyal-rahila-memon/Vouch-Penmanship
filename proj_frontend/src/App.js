import React from "react"
import "./App.css"
import Card from "./React-Project/Card"
import data from "./React-Project/CardArray"

import NFTCard from "./Components/NFTCard"
import Login2 from "./Components/Login2"
import Signup from "./Components/Signup"

import Gallery from "./Components/Gallery"
import ForgotPassword from "./Components/ForgetPassword"
import ManuscriptForm from "./Components/ManuscriptForm"
import ManuScript from "./Components/ManuScript"
import Particle from "./Components/Particle"
import { Routes, Route } from "react-router-dom"
import { API } from "./backend"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Grid, Box } from "@mui/material"

import { useLocation } from "react-router-dom"
import NFTListCard from "./Components/NFTListCard"

function App() {
    const location = useLocation()

    const role = location.state?.Role
    const isLogin = location.state?.isLogin
    const document = location.state?.NFTDocuments
    const loginCredentials = location.state?.LoginCredentials

    console.log(
        `App.js login: ${JSON.stringify(loginCredentials)} role: ${role}`
    )
    return (
        <Routes>
            <Route path="/" element={<Login2 />} />
            <Route path="/signup" element={<Signup />} />
            <Route
                path="/gallery"
                element={
                    <>
                        {console.log(`Role in Gallery : ${role}`)}
                        <Navbar
                            role={role}
                            loginCredentials={loginCredentials}
                            event={"Home"}
                        />
                        <Gallery
                            role={role}
                            loginCredentials={loginCredentials}
                        />
                        <Footer />
                    </>
                }
            />
            <Route
                path="/manuscript"
                element={
                    <>
                        <Navbar
                            role={role}
                            loginCredentials={loginCredentials}
                            event={"Manuscript"}
                        />
                        <ManuScript
                            role={role}
                            loginCredentials={loginCredentials}
                        />
                    </>
                }
            />
            <Route path="/forgetpassword" element={<ForgotPassword />} />
            <Route
                path="/manuscriptform"
                element={
                    <>
                        <Navbar
                            role={role}
                            loginCredentials={loginCredentials}
                        />
                        <ManuscriptForm
                            role={role}
                            loginCredentials={loginCredentials}
                        />
                    </>
                }
            />
            <Route
                path="/ideas"
                element={
                    <>
                        <Navbar
                            role={role}
                            loginCredentials={loginCredentials}
                        />
                        {/* <Ideas />
                        <Footer1 /> */}
                    </>
                }
            />
            <Route
                path="/NFTCard"
                element={
                    <>
                        <Navbar
                            role={role}
                            loginCredentials={loginCredentials}
                        />
                        <NFTListCard
                            NFTDocuments={document}
                            role={role}
                            loginCredentials={loginCredentials}
                        />
                    </>
                }
            />
        </Routes>
    )
}

export default App
