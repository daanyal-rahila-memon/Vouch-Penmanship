import Paper from "@mui/material/Paper"
import "../CSS/Practice.css"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import Grid from "@mui/material/Unstable_Grid2"
import { pdfjs } from "react-pdf"

// Animation
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const NFTCard = (props) => {
    const [coverImage, setCoverImage] = useState(null)

    useEffect(() => {
        const fetchPdfCover = async () => {
            const response = await fetch(props.link)
            const buffer = await response.arrayBuffer()
            const pdf = await pdfjs.getDocument(buffer).promise
            const page = await pdf.getPage(1)
            const viewport = page.getViewport({ scale: 1.0 })
            const canvas = document.createElement("canvas")
            const canvasContext = canvas.getContext("2d")
            canvas.width = viewport.width
            canvas.height = viewport.height
            const renderContext = {
                canvasContext,
                viewport,
            }
            await page.render(renderContext).promise
            const base64Image = canvas.toDataURL()
            setCoverImage(base64Image)
        }

        fetchPdfCover()
    }, [props.link])

    function myFuc() {
        console.log("whatsgoinOn")
    }
    return (
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
                            image={coverImage}
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
    )
}

export default NFTCard
