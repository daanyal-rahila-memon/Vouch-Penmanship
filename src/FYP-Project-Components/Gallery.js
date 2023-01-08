import {Button, Box, Typography, Divider, Pagination, Stack } from "@mui/material"
import NFTCard from "./NFTCard"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import {motion} from "framer-motion"
import React, { useEffect, useState } from "react"


import Navbar from "./Navbar"

const Gallery = () => {
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
        <Navbar />
        
        <Typography sx={{pt: "55px", textAlign: "center"}} component="h2" variant="h2">My Project</Typography>
        <Divider sx=
        {{mt: "50px", mb: "50px", color: "black", borderColor: "#434F53",
        background: "transparent"}} variant="middle"/>
      </Box>
      <Grid spacing={4} container justifyContent="center">
        
       {NFTCardArray}
        {/* {<Profile /> } */}
      </Grid>


      {/* <Stack>
        <Pagination onClick={()=> {}} count={NFTCardArray.length/6} />
      </Stack> */}
      
    </>
  )
}

export default Gallery