import React from "react";
import "./App.css";
import Card from "./React-Project/Card";
import data from "./React-Project/CardArray";
import NFTCard from "./Components/NFTCard";
import Login2 from "./Components/Login2";
import Signup from "./Components/Signup";
import Gallery from "./Components/Gallery";
import ForgotPassword from "./Components/ForgetPassword";
import ManuscriptForm from "./Components/ManuscriptForm";
import ManuScript from "./Components/ManuScript";
import { Routes, Route } from "react-router-dom";
import { API } from "./backend";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Grid, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import NFTListCard from "./Components/NFTListCard";
import { Home, InstallDesktopSharp, ManageAccounts, Notifications } from "@mui/icons-material";
import Ideas from "./Components/Ideas";
import AddSupervisor from "./Components/AddSupervisor";
import Admin from "./Components/Admin";
import Footer1 from "./Components/Footer1";
import RequestForm from "./Components/RequestForm";
import UploadIdea from "./Components/UploadIdea";
function App() {
  const location = useLocation();

  const role = location.state?.Role;
  const isLogin = location.state?.isLogin;
  const document = location.state?.NFTDocuments;

  return (
    
    <Routes>
              {/* <Route path="/" element={<><Navbar/><Footer1/></>} /> */}

        {/* Testing code above */}
      <Route path="/" element={<Login2 />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/gallery" element={ <>  {console.log(`Role in Gallery : ${role}`)} <Navbar role={role} />  <Gallery /> <Footer1 /></> }  />
      <Route path="/forgetpassword" element={<ForgotPassword />} />
      <Route path="/home" element={<><Home/><Footer1 /></>} />
      <Route path="/ideas" element={<><Ideas/><Footer1 /></>} />

      {/* admin Module */}
      <Route path="/adminpage" element={<><Admin/><Footer1 /></>} />
      <Route path="/manageaccount" element={<><ManageAccounts/><Footer1 /></>} />
      <Route path="/addsupervisor" element={<><AddSupervisor/><Footer1 /></>} />

      {/* supervisor module */}
      <Route path="/showrequests" element={<><Notifications/><Footer1 /></>} />
      <Route path="/uploadideas" element={<><UploadIdea/><Footer1 /></>} />

      {/* student module */}
      <Route path="/manuscriptform" element={<> <Navbar role={"student"} /> <ManuscriptForm /> <Footer1 /></> } />
      <Route path="/manuscript" element={<> <Navbar role={"student"} /> <ManuScript /> </> } /> <Route path="/NFTCard" element={<NFTListCard NFTDocuments={document}  />} /> 
      <Route path="/sendrequest" element={<> <Navbar role={"student"} /> <RequestForm /> <Footer1 /></> } />

      </Routes>
      
  );
}

export default App;
