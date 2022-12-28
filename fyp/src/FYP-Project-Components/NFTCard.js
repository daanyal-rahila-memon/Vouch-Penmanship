import Paper from "@mui/material/Paper"
import "../CSS/Practice.css"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import Grid from "@mui/material/Unstable_Grid2"
import {Link} from "@mui/material"

// Animation
import {motion} from "framer-motion"

const NFTCard = () => {

  function myFuc()
  {
    console.log("whatsgoinOn")
  }
  return (
    <motion.div 
      whileHover={{
        scale: 0.9, transition:{duration: 0.3}
        }}>
      <Grid  onClick={()=> window.open("https://google.com")} sx={{cursor: "pointer"}}>
        <Paper elevation={10} sx={{height: "334.88px", width: "446px", borderRadius: "15px"}}>
          <CardMedia
            component="img"
            height="250" 
            image="/images/Australia.png"
            alt="Autralia"
            sx={{
            borderRadius: "15px 15px 0px 0px"
            }}
          >
          </CardMedia>

          <CardContent 
          sx={{
            display: "flex", gap: "10px", 
            margin: "-26px 0px 0px 0px",
            padding: "16px",
            alignItems: "flex-end"
            }} >
            <Avatar sx={{height: "70px", width: "70px"}} variant="rounded" src="/images/globe.gif" />
            <Typography component="div" variant="h5" gutterBottom noWrap
            >
              Rizwan-ul-Haq
            </Typography>
          </CardContent>
        </Paper>
      </Grid>
    </motion.div>
  )
}

export default NFTCard