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

function App() {
    const location = useLocation()
    const role = location.state?.Role
    const Elements = [
        { id: 0, nftimage: "image1.jpg", supervisorname: "Sir Umar Aftab" },
        { id: 1, nftimage: "image2.jpg", supervisorname: "Sir Rizwan Ul Haq" },
        { id: 2, nftimage: "image3.jpg", supervisorname: "Sir Bilal Khan" },
        { id: 3, nftimage: "image4.jpg", supervisorname: "Sir Abdul Qadeer" },
        { id: 4, nftimage: "image5.jpg", supervisorname: "Mam Saba" },
        { id: 5, nftimage: "image6.jpg", supervisorname: "Mam Pariwish" },
        { id: 6, nftimage: "image7.jpg", supervisorname: "Mam Sehar" },
        { id: 7, nftimage: "image8.jpg", supervisorname: "Sir Tahir" },
        { id: 8, nftimage: "image9.jpg", supervisorname: "Sir Sajid" },
        { id: 9, nftimage: "image10.jpg", supervisorname: "Mam Ayesha" },
        { id: 10, nftimage: "image11.jpg", supervisorname: "Sir Daanyal" },
        { id: 11, nftimage: "image12.jpg", supervisorname: "Sir Azeem" },
    ]

    var NFTCardArray = Elements.map((data) => {
        return (
            <Grid item xs={12} sm={6} md={4}>
                <NFTCard key={data.id} {...data} />
            </Grid>
        )
    })

    return (
        <Routes>
            <Route path="/" element={<Login2 />} />
            <Route path="/signup" element={<Signup />} />
            <Route
                path="/gallery"
                element={
                    <>
                        {console.log(`Role in Gallery : ${role}`)}
                        <Navbar role={role} />
                        <Gallery />
                        <Footer />
                    </>
                }
            />
            <Route path="/forgetpassword" element={<ForgotPassword />} />
            <Route
                path="/manuscriptform"
                element={
                    <>
                        <Navbar role={"Student"} />
                        <ManuscriptForm />
                    </>
                }
            />
            <Route
                path="/manuscript"
                element={
                    <>
                        <Navbar role={"Student"} />
                        <ManuScript />
                    </>
                }
            />
            <Route
                path="/NFTCard"
                element={
                    <Box>
                        <Grid
                            item
                            container
                            spacing={2}
                            sx={{ position: "relative", overflow: "hidden" }}
                        >
                            {NFTCardArray}
                        </Grid>
                    </Box>
                }
            />
        </Routes>
    )
}

export default App
