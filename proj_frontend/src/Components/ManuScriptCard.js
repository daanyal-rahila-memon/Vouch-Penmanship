import React, { useState, useEffect } from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Collapse from "@mui/material/Collapse"
import Button from "@mui/material/Button"
import { ExpandMore } from "@mui/icons-material"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { pdfjs, Document, Page } from "react-pdf"
import { motion } from "framer-motion"
import { setNFT } from "../auth/helper"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const options = ["Mint NFT"]
function ManuScriptCard(manuscript) {
    const [expanded, setExpanded] = useState(false)
    const [coverImage, setCoverImage] = useState(null)
    const [menuAnchorEl, setMenuAnchorEl] = useState(null)

    useEffect(() => {
        const fetchPdfCover = async () => {
            const response = await fetch(manuscript.link)
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
    }, [manuscript.link])

    const handleMenuClick = (event) => {
        event.stopPropagation()
        setMenuAnchorEl(event.currentTarget)
    }

    const handleMenuClose = (event) => {
        event.stopPropagation()
        const value = event.target.textContent
        if (value == "Mint NFT") {
            handleMintingNFT()
        }
        setMenuAnchorEl(null)
    }

    const handleManuscriptOpen = () => {
        window.open(manuscript.link, "_blank")
    }
    const handleExpandClick = () => {
        console.log("drop")

        setExpanded(!expanded)
    }

    const handleMintingNFT = async () => {
        // console.log(
        //     ` Called Minting Function ${manuscript.id} ${manuscript.link} ${manuscript.title} ${manuscript.description}\n\n`
        // )

        await connectWallet()
        const returnStatus = await onMinting(
            manuscript.link,
            manuscript.title,
            manuscript.description
        )
        if (returnStatus.success) {
            console.log("run sucessfully")
            setNFT(manuscript.id)
        }
        alert(returnStatus.status)

        // console.log(`\n\nMinting Status : ${JSON.stringify(status)}`)
    }

    return (
        <motion.div
            whileHover={{
                scale: 0.9,
                transition: { duration: 0.3 },
            }}
        >
            <Card
                sx={{
                    boxShadow:
                        "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)",
                    borderRadius: "15px",
                }}
                onClick={handleManuscriptOpen}
            >
                <CardHeader
                    title={manuscript.title}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingRight: "0px",
                        "& .MuiCardHeader-action": {
                            marginTop: "0px",
                            marginRight: "0px",
                        },
                    }}
                    action={
                        <React.Fragment>
                            <IconButton onClick={handleMenuClick}>
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                anchorEl={menuAnchorEl}
                                open={Boolean(menuAnchorEl)}
                                onClose={handleMenuClose}
                            >
                                {options.map((option) => (
                                    <MenuItem onClick={handleMenuClose}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </React.Fragment>
                    }
                />
                <CardMedia
                    component="img"
                    height="300"
                    image={coverImage}
                    alt={manuscript.title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {manuscript.description.length > 100 && !expanded
                            ? manuscript.description.slice(0, 100) + "..."
                            : manuscript.description}
                        {manuscript.description.length > 100 && (
                            <IconButton
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleExpandClick()
                                }}
                            >
                                <ExpandMore />
                            </IconButton>
                        )}
                    </Typography>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Typography variant="body2" color="text.secondary">
                            {manuscript.description}
                        </Typography>
                    </Collapse>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default ManuScriptCard
