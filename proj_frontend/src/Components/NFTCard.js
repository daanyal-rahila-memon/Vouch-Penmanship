import Paper from "@mui/material/Paper"
import "../CSS/Practice.css"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import Grid from "@mui/material/Unstable_Grid2"

// Animation
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { duration } from "@mui/material"

const NFTCard = (props) => {
    const [shown, setShown] = useState(true)

    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setShown(true)
    //     console.log(props.supervisorName)
    //   }, props.wait)
    // }, [props.wait])

    function myFuc() {
        console.log("whatsgoinOn")
    }
    return shown ? (
        <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 5 }}
            transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
            }}
        >
            <motion.div
                whileHover={{
                    scale: 0.9,
                    transition: { duration: 0.3 },
                }}
            >
                <Grid
                    onClick={() => window.open("https://google.com")}
                    sx={{ cursor: "pointer" }}
                >
                    <Paper
                        elevation={10}
                        sx={{
                            maxWidth: 446,
                            borderRadius: "15px",
                            overflow: "hidden",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="250"
                            image={`/images/${props.nftimage}`}
                            alt="Autralia"
                            sx={{
                                borderRadius: "15px 15px 0px 0px",
                            }}
                        ></CardMedia>

                        <CardContent
                            sx={{
                                display: "flex",
                                gap: "10px",
                                margin: "-26px 0px 0px 0px",
                                padding: "16px",
                                alignItems: "flex-end",
                            }}
                        >
                            <Avatar
                                sx={{ height: "70px", width: "70px" }}
                                variant="rounded"
                                src="/images/globe.gif"
                            />
                            <Typography
                                component="div"
                                variant="h5"
                                gutterBottom
                                noWrap
                            >
                                {props.supervisorname}
                            </Typography>
                        </CardContent>
                    </Paper>
                </Grid>
            </motion.div>
        </motion.div>
    ) : null
}

export default NFTCard
