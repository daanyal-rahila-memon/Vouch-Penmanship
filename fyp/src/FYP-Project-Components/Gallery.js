import { Box, Typography, Divider } from "@mui/material"
import Card from "../FYP-Project-Components/NFTCard"


const Gallery = () => {
  return (
    <Box>
      <Box sx={{width: "83px", height: "83px", textAlign: "center"}}> Navbar</Box>
      <Typography sx={{pt: "110px"}} component="h2" variant="h2">My Project</Typography>
      <Divider sx=
      {{mt: "50px", mb: "50px", color: "black", borderColor: "#434F53",
       background: "transparent"}} variant="middle"/>
    </Box>
  )
}

export default Gallery