import Grid from "@mui/material/Unstable_Grid2"
import Paper from "@mui/material/Paper"
import CardMedia from "@mui/material/CardMedia"
import Avatar from "@mui/material/Avatar"
import CardContent from "@mui/material/CardContent"
import theme from "../theme"
import { ThemeProvider } from "@mui/material"
import { Button, Link } from "@mui/material"

// Animation 
// import 


const Profile = () => {

  return (
      <Grid>
        <CardMedia
              component="img"
              alt="UserProfile"
              src="/images/Norway.png"
              height="237.2"
          > 
        </CardMedia>
        <Avatar
            sx={{height: "180px", width: "180px", borderRadius: "10px"}}
            variant="rounded" 
            src="/images/Norway.png"
        />
        <Button variant="contained">Hello</Button>
      </Grid>
  )
}

export default Profile