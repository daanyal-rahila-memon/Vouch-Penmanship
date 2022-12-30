import { Box, Typography, Divider } from "@mui/material"
import NFTCard from "./NFTCard"
import Grid from "@mui/material/Unstable_Grid2/Grid2"


const Gallery = () => {

  const NFTCardArray = []
  for (var i=0; i<12; i++)
  {
    NFTCardArray.push(<NFTCard />)
  }

  return (
    <>
      <Box >
        <Box sx={{width: "83px", height: "83px", textAlign: "center"}}> Navbar</Box>
        <Typography sx={{pt: "55px", textAlign: "center"}} component="h2" variant="h2">My Project</Typography>
        <Divider sx=
        {{mt: "50px", mb: "50px", color: "black", borderColor: "#434F53",
        background: "transparent"}} variant="middle"/>
      </Box>
      <Grid spacing={4} container justifyContent="center">
        {NFTCardArray}
        {/* {<Profile /> } */}
      </Grid>
    </>
    
  )
}

export default Gallery