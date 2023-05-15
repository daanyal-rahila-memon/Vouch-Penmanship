import React from "react"
import "./App.css"
import Card from "./React-Project/Card"
import data from "./React-Project/CardArray"

import NFTCard from "./Components/NFTCard"
import Login2 from "./Components/Login2"
import Signup from "./Components/Signup"

import Gallery from "./Components/Gallery";
import ForgotPassword from "./Components/ForgetPassword";
import ManuScript from "./Components/ManuScript";
// import ManuscriptForm from "./Components/ManuscriptForm"
import {Routes, Route} from "react-router-dom";
import { API } from './backend';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
//import Ideas from "./Components/Ideas";
import SupervisorNamesDropdown from "./Components/SupervisorNamesDrpdown";
import Footer from "./Components/Footer";
import ManuScript2 from "./Components/ManuScript2";
import Signin from "./Components/Login2"
import Ideas from "./Components/Ideas"
import Footer1 from "./Components/Footer1"
import Notifications from "./Components/Notifications"
import UploadIdea from "./Components/UploadIdea"
import AddSupervisor from "./Components/AddSupervisor"
import Admin from "./Components/Admin";
import ManageAccount from "./Components/ManageAccount"
import RequestForm from "./Components/RequestForm"

function App() {
    const Element = [
        {
            id: 1,
            rating: "5.0",
            reviewCount: 8,
            country: "pakistan",
            title: "Life With jony jony",
            price: 16,
        },
        {
            id: 2,
            rating: "5.0",
            reviewCount: 8,
            country: "pakistan",
            title: "Life With Honey Honey",
            price: 16,
        },
        {
            id: 3,
            rating: "5.0",
            reviewCount: 8,
            country: "pakistan",
            title: "Life With jony jony",
            price: 16,
        },
    ]

    const ProfileDetails = [
        { id: 1, value: "Technology", techImg: "technology.png" },
        { id: 2, value: "Description", techImg: "technology.png" },
        { id: 3, value: "Supervisor", techImg: "technology.png" },
        { id: 4, value: "Supervisor", techImg: "technology.png" },
    ]

    const ElementArray = Element.map((data) => {
        return (
            <Card
                key={data.id}
                // item={data}
                {...data}
            />
        )
    })

    // const list = ProfileDetails.map(data => <Button>{data.value}</Button>)

    const cardArray = data.map((items) => {
        return <Card key={items.id} {...items} />
    })

    const NFTCardArray = []
    for (var i = 0; i < 12; i++) {
        NFTCardArray.push(<NFTCard />)
    }

    ;<div className="App">
        {/* {ElementArray}
<Navbar />
{cardArray} */}
        {/* {<Login /> */}

        {/* <Signup /> */}

        {/* <UserProfile value={ProfileDetails}/> */}

        {/* <Login2 /> */}
    </div>

  return (
    
      <Routes>
        <Route path="/" element={<><Navbar/><RequestForm/></>}/>
        <Route path="/home" element={<><Navbar/><Home /><Footer /></>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={<><Navbar role={"Student"}/><Gallery/><Footer /></>}/>
        <Route path="/forgetpassword" element={<ForgotPassword />} />
        <Route path="/ideas" element={<><Navbar role={"Student" || "Supervisor"}/><SupervisorNamesDropdown /></>} />

        {/* <Route path="/manuscriptform" element={<><Navbar role={"Student"}/> <ManuscriptForm /></>} /> */}
        <Route
             path="/manuscript"
                element={
                    <>
                        <Navbar role={"Student"} />
                        <ManuScript />
                    </>
                }
            />
      </Routes>
  );
}

export default App
