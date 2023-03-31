import React from "react";
import './App.css';
import Card from "./React-Project/Card"
import data from "./React-Project/CardArray"

import NFTCard from "./Components/NFTCard";
import Login2 from "./Components/Login2"
import Signup from "./Components/Signup";

import Gallery from "./Components/Gallery";
import ForgotPassword from "./Components/ForgetPassword";
import ManuscriptForm from "./Components/ManuscriptForm";
import ManuScript from "./Components/ManuScript";
import Particle from "./Components/Particle"
import {Routes, Route} from "react-router-dom";
import { API } from './backend';
import Navbar from "./Components/Navbar";

function App() 
{
const Element = [{id:1, rating: "5.0", reviewCount: 8, country: "pakistan",
title: "Life With jony jony", price: 16},
{id: 2, rating: "5.0", reviewCount: 8, country: "pakistan",
title: "Life With Honey Honey", price: 16},
{id:3, rating: "5.0", reviewCount: 8, country: "pakistan",
title: "Life With jony jony", price: 16}]

const ProfileDetails = [{id: 1, value: "Technology", techImg: "technology.png"},
{id: 2, value: "Description", techImg: "technology.png"},
{id: 3, value: "Supervisor", techImg: "technology.png"},
{id: 4, value: "Supervisor", techImg: "technology.png"}]

const ElementArray = Element.map(data => {
  return <Card
  key={data.id}
  // item={data}
  {...data}
   />
})

// const list = ProfileDetails.map(data => <Button>{data.value}</Button>)

const cardArray = data.map(items => {
  return <Card
  key={items.id}
  {...items}
   />
})

const NFTCardArray = []
for (var i=0; i<12; i++)
{
  NFTCardArray.push(<NFTCard />)
}

<div className="App">
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
        <Route path="/" element={<Login2 />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={<><Navbar role={"Student"}/><Gallery/></>}/>
        <Route path="/forgetpassword" element={<ForgotPassword />} />
        <Route path="/manuscriptform" element={<><Navbar role={"Student"}/><ManuscriptForm/></>} />
        <Route path="/manuscript" element={<><Navbar role={"Student"}/><ManuScript/></>} />
      </Routes>
  );
}

export default App;