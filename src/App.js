import React from "react";
import './App.css';
import Card from "./React-Project/Card"
import data from "./React-Project/CardArray"

import NFTCard from "./FYP-Project-Components/NFTCard";
import Login2 from "./FYP-Project-Components/Login2"
import Signup from "./FYP-Project-Components/Signup";


import Gallery from "./FYP-Project-Components/Gallery";
import ForgotPassword from "./FYP-Project-Components/ForgetPassword";

import {Routes, Route} from "react-router-dom";

function App() {

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
      <Route path="/signUp" element={<Signup />} />
      <Route path="/Gallery/:role" element={<Gallery />}/>
      <Route path="/ForgetPassword" element={<ForgotPassword />} />
    </Routes>
  );
}



export default App;
