import {Button, Box, Typography, Divider, Pagination, Stack } from "@mui/material"
import NFTCard from "./NFTCard"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "./Navbar"



const Gallery = (props) => {

 
  const location = useLocation()

  console.log(location.state.role)
  var i = 1;
  const [dis, setDis] = useState([0])
  const supervisorList = ["Rizwan-ul-Haq", "Muhammad Bilal", "Furqan Athar",
  "Kashif Aziz", "Salman Aziz", "Umer Hayat", "Umair Akram", "Muhammad Rizwan",
  "Zubair Sattar", "Muhammad Uzair", "Ali Hamza", "Waseem Akram"]

  var NFTCardArray = []

  // NFTCardArray.push(<motion.div initial={{x:-100}} whileInView={{x: 5}} transition={{
  //   type: "spring",
  //   stiffness: 70,  
  //   damping: 20
  // }}><NFTCard supervisorName={supervisorList[i]}/></motion.div>)

  

  // const [nftCardArray, setNFTCardArray] = useState([<motion.div initial={{x:-100}} whileInView={{x: 5}} transition={{
  //   type: "spring",
  //   stiffness: 70,  
  //   damping: 20
  // }}><NFTCard supervisorName={supervisorList[i]}/></motion.div>])


 
  // const NFTCardArray = []

  // useEffect(() => {

  //   if (dis.length < 12)
  //   {
  //     setTimeout(() => {
  //       setDis(value => [...value, dis.length]) 
  //       console.log(dis)
  //     }, 1000)
  //   }
  // }, [dis, nftCardArray])


  // const Display = () => {

  //   return nftCardArray
  // }
  

const Element = [{id:0,nftimage:"image1.jpg",supervisorname:"Sir Umar Aftab"},
{id:1,nftimage:"image2.jpg",supervisorname:"Sir Rizwan Ul Haq"},
{id:2,nftimage:"image3.jpg",supervisorname:"Sir Bilal Khan"},
{id:3,nftimage:"image4.jpg",supervisorname:"Sir Abdul Qadeer"},
{id:4,nftimage:"image5.jpg",supervisorname:"Mam Saba"},
{id:5,nftimage:"image6.jpg",supervisorname:"Mam Pariwish"},
{id:6,nftimage:"image7.jpg",supervisorname:"Mam Sehar"},
{id:7,nftimage:"image8.jpg",supervisorname:"Sir Tahir"},
{id:8,nftimage:"image9.jpg",supervisorname:"Sir Sajid"},
{id:9,nftimage: "image10.jpg",supervisorname:"Mam Ayesha"},
{id:10,nftimage:"image11.jpg",supervisorname:"Sir Daanyal"},
{id:11,nftimage:"image12.jpg",supervisorname:"Sir Azeem"}]


const nfg = Element.map(data => {
  return (<NFTCard key={data.id} {...data} />)
})
  for (var i=0; i<12 ; i++)
  {
    // NFTCardArray.push(<motion.div initial={{x:-100}} whileInView={{x: 5}} transition={{
    //   type: "spring",
    //   stiffness: 70,
    //   damping: 20,
    // }}><NFTCard supervisorName={supervisorList[i]} wait={1000*i}/></motion.div>)

    NFTCardArray.push(<NFTCard supervisorName={supervisorList[i]} wait={i}/>)
  }

  return (
    <>
      <Box>
        <Typography sx={{mb: "70px",mt: "140px", textAlign: "center"}} component="h2" variant="h2">Vouch Penmanship</Typography>
        <Divider sx=
        {{mt: "50px", mb: "40px",ml:"21ch",mr:"21ch", color: "black", borderColor: "#434F53",
        background: "transparent"}} variant="middle"/>
      </Box>
      <Grid id="Gallery" spacing={4} container justifyContent="center" sx={{mr: "0px"}}>
        
       {nfg}
        {/* {<Profile /> } */}
      </Grid>


      {/* <Stack>
        <Pagination onClick={()=> {}} count={NFTCardArray.length/6} />
      </Stack> */}
    </>
  )
}

export default Gallery