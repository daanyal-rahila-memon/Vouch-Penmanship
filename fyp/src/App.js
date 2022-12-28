import React from "react";
import './App.css';
import logo from './logo.svg'
import Navbar from "./React-Project/Navbar"
import Card from "./React-Project/Card"
import data from "./React-Project/CardArray"
import Login from "./FYP-Project-Components/Login"
import Grid from "@mui/material/Unstable_Grid2"
import NFTCard from "./FYP-Project-Components/NFTCard";
import Profile from "./FYP-Project-Components/Profile";

import Login2 from "./FYP-Project-Components/Login2"
import Signup from "./FYP-Project-Components/Signup";

import UserProfile from "./FYP-Project-Components/UserProfile";

import {Button} from "@mui/material"
import { ListAlt } from "@mui/icons-material";


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
for (var i=0; i<3; i++)
{
  NFTCardArray.push(<NFTCard />)
}
  return (
    <div className="App">
      {/* {ElementArray}
      <Navbar />
      {cardArray} */}
      {/* {<Login /> */}
      <Grid spacing={2} container sx={{padding: "16px"}}>
        {NFTCardArray}
        {/* <Profile /> */}
      </Grid>

      {/* <Signup /> */}

      {/* <UserProfile value={ProfileDetails}/> */}
      {/* <Login2 /> */}
    </div>
  );
}

export default App;
