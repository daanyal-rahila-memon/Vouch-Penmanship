import { Box, Typography, Button } from "@mui/material" 
import {Person} from "@mui/icons-material"
import { useState, useRef } from "react"

export default function UserProfile(props) {
 
  const [p, setP] = useState(props)

  const ref = useRef([])

  const text = ["Apple", "Mango", "Fruit"].map((value, index) => {
    return (
      <Typography ref={element => ref.current[index] = element} sx={{mt: "1000px", width: "450px"}} variant="h3" component="h1">
         {value}
      </Typography>
    )
  })


  const myProfile = props.value.map ((data, index) => {
   return (<Button key={data.id} sx={{flexDirection: "column", mr: "3ch"}}
    onClick={() => ref.current[index].scrollIntoView({behavior: 'smooth'})}>
      <img width="32px" src={`/images/${data.techImg}`} />
      <Typography sx={{fontSize: "11px", fontWeight: "500", mt: "3px"}}>{data.value}</Typography>
      </Button>
   )})

  return (
    <div>
          <Box sx={{display: "flex", flexDirection: "row",
       mt: "50px", mb: "500px"
    }}>
      
      <Box sx={{flex: 1, display: "flex", flexDirection: "column", alignItems: "center"}}>
        <img src="/images/Project Logo.jpeg" height="144px" width="144px"/>
        <Typography sx={{width: "450px"}} variant="h3" component="h1">
          Vouch PenmanShip
        </Typography>
      </Box>

      <Box sx={{pt: "10ch",display: "flex", flexDirection: "column", justifyContent: "end"}}>
        {myProfile}
      </Box>
    </Box>

    {text}
    </div>
  )
}