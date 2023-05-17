import React from "react"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { getAllManuscripts_NFT } from "../auth/helper"
import NFTCard from "./NFTCard"

const CategoryCard = ({ image, category, role, loginCredentials }) => {
    const navigate = useNavigate()

    const handleNFTCard = async () => {
        console.log(`Category : ${category}`)
        // console.log(JSON.stringify(getAllManuscripts_NFT(category)))
        const documents = await getAllManuscripts_NFT(category)
        console.log(`NFT Document : ${documents}`)
        navigate("/NFTCard", {
            state: {
                NFTDocuments: documents,
                Role: role,
                isLogin: loginCredentials,
            },
        })
        console.log(`Category : ${category}`)
    }
    return (
        <motion.div
            style={{ maxWidth: 345 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Card
                sx={{
                    maxWidth: 345,
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
                onClick={handleNFTCard}
            >
                <CardMedia
                    image={image}
                    title={category}
                    sx={{
                        height: 240,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "16px 16px 0 0",
                    }}
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {category}
                    </Typography>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default CategoryCard
