// import React, { useState } from "react"
// import { pdfjs, Document, Page } from "react-pdf"

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

// const Testing = ({ pdfLink }) => {
//     const [coverImage, setCoverImage] = useState(null)

//     const fetchPdfCover = async () => {
//         console.log(pdfLink)
//         const response = await fetch(pdfLink)
//         const buffer = await response.arrayBuffer()
//         const pdf = await pdfjs.getDocument(buffer).promise
//         const page = await pdf.getPage(1)
//         const viewport = page.getViewport({ scale: 1.0 })
//         const canvas = document.createElement("canvas")
//         const canvasContext = canvas.getContext("2d")
//         canvas.width = viewport.width
//         canvas.height = viewport.height
//         const renderContext = {
//             canvasContext,
//             viewport,
//         }
//         await page.render(renderContext).promise
//         const base64Image = canvas.toDataURL()
//         setCoverImage(base64Image)
//     }

//     return (
//         <div>
//             <button onClick={fetchPdfCover}>Fetch PDF Cover</button>
//             {coverImage && <img src={coverImage} alt="PDF Cover" />}
//         </div>
//     )
// }

// export default Testing

import React, { useState, useEffect } from "react"
import { pdfjs, Document, Page } from "react-pdf"
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@mui/material"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Testing = ({ pdfLink }) => {
    const [coverImage, setCoverImage] = useState(null)
    const [isPdfOpen, setIsPdfOpen] = useState(false)

    useEffect(() => {
        const fetchPdfCover = async () => {
            const response = await fetch(pdfLink)
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
    }, [pdfLink])

    const handlePdfOpen = () => {
        window.open(pdfLink, "_blank")
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={handlePdfOpen}>
                {coverImage && (
                    <CardMedia
                        component="img"
                        height="140"
                        image={coverImage}
                        alt="PDF Cover"
                    />
                )}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        PDF Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        PDF Description
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Testing
