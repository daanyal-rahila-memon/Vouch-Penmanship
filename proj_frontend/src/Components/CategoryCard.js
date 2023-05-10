import React from "react"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { motion } from "framer-motion"

const CategoryCard = ({ image, category }) => {
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
