import React from "react";
import "./App.css";
import Login2 from "./Components/Login2";
import Signup from "./Components/Signup";
import Gallery from "./Components/Gallery";
import ForgotPassword from "./Components/ForgetPassword";
import ManuscriptForm from "./Components/ManuscriptForm";
import ManuScript from "./Components/ManuScript";
import Notifications from "./Components/Notifications";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { useLocation } from "react-router-dom";
import NFTListCard from "./Components/NFTListCard";
import { Home } from "@mui/icons-material";
import Ideas from "./Components/Ideas";
import AddSupervisor from "./Components/AddSupervisor";
import Admin from "./Components/Admin";
import Footer1 from "./Components/Footer1";
import RequestForm from "./Components/RequestForm";
import UploadIdea from "./Components/UploadIdea";
import ManageAccount from "./Components/ManageAccount";

function App() {
  const location = useLocation();

  const role = location.state?.Role;
  const isLogin = location.state?.isLogin;
  const document = location.state?.NFTDocuments;

  return (
    
    <Routes>
        {/* Testing code above */}
      <Route path="/" element={<Login2 />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgetpassword" element={<ForgotPassword />} />
      <Route path="/gallery" element={<><Navbar role={"student"} /><Home/><Footer1 /></>} />

      {/* admin Module */}
      <Route path="/adminpage" element={<><Navbar role={"admin"} /><Admin/><Footer1 /></>} />
      <Route path="/manageaccount" element={<><Navbar role={"admin"} /><ManageAccount/><Footer1 /></>} />
      <Route path="/addsupervisor" element={<><Navbar role={"admin"} /><AddSupervisor/><Footer1 /></>} />

      {/* supervisor module */}
      <Route path="/showrequests" element={<><Navbar role={"supervisor"} /><Notifications/><Footer1 /></>} />
      <Route path="/uploadideas" element={<><Navbar role={"supervisor"} /><UploadIdea/></>} />

      {/* student module */}
      <Route path="/manuscriptform" element={<> <Navbar role={"student"} /> <ManuscriptForm /> <Footer1 /></> } />
      <Route path="/manuscript" element={<> <Navbar role={"student"} /> <ManuScript /> </> } /> <Route path="/NFTCard" element={<NFTListCard NFTDocuments={document}  />} /> 
      <Route path="/sendrequest" element={<> <Navbar role={"student"} /> <RequestForm /> <Footer1 /></> } />
      <Route path="/ideas" element={<><Navbar role={"student"} /><Ideas/><Footer1 /></>} />

      </Routes>
      
  );
}

export default App;
