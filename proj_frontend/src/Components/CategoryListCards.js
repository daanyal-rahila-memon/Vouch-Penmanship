// import React from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Box, Typography } from "@mui/material"
// import { ChevronLeft, ChevronRight } from "@mui/icons-material"
// import CategoryCard from "./CategoryCard"

// const cardVariants = {
//     enter: {
//         x: "100%",
//         opacity: 0,
//     },
//     center: {
//         x: 0,
//         opacity: 1,
//     },
//     exit: {
//         x: "-100%",
//         opacity: 0,
//     },
// }

// const cards = [
//     {
//         category: "Photography",
//         image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
//     },
//     {
//         category: "Music",
//         image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
//     },
//     {
//         category: "Art",
//         image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
//     },
//     {
//         category: "sPhotography",
//         image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
//     },
//     {
//         category: "sPhotography",
//         image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
//     },
//     {
//         category: "hotography",
//         image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
//     },
//     {
//         category: "Phtography",
//         image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
//     },
//     {
//         category: "Photograhy",
//         image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
//     },
//     {
//         category: "Photographys",
//         image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
//     },
//     {
//         category: "Photograph",
//         image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
//     },
// ]

// const CategoryListCards = () => {
//     const [activeIndex, setActiveIndex] = React.useState(0)

//     const onNext = () => {
//         setActiveIndex((prev) => (prev + 1) % cards.length)
//     }

//     const onPrev = () => {
//         setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
//     }

//     return (
//         <Box sx={{ position: "relative", overflow: "hidden" }}>
//             <AnimatePresence initial={false} custom={activeIndex}>
//                 <motion.div
//                     key={activeIndex}
//                     custom={activeIndex}
//                     variants={cardVariants}
//                     initial="enter"
//                     animate="center"
//                     exit="exit"
//                     sx={{
//                         position: "absolute",
//                         width: "100%",
//                         height: "100%",
//                     }}
//                 >
//                     <CategoryCard {...cards[activeIndex]} />
//                     <CategoryCard {...cards[activeIndex + 1]} />
//                     <CategoryCard {...cards[activeIndex + 2]} />
//                 </motion.div>
//             </AnimatePresence>
//             <Box sx={{ position: "absolute", top: "50%", left: 0 }}>
//                 <ChevronLeft onClick={onPrev} />
//             </Box>
//             <Box sx={{ position: "absolute", top: "50%", right: 0 }}>
//                 <ChevronRight onClick={onNext} />
//             </Box>
//         </Box>
//     )
// }

// export default CategoryListCards

import React from "react"
import { motion } from "framer-motion"
import { Grid } from "@mui/material"
import CategoryCard from "./CategoryCard"

const CategoryListCards = () => {
    const [page, setPage] = React.useState(0)

    const handlePrevPage = () => {
        setPage((prevPage) => prevPage - 1)
    }

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1)
    }
    const categories = [
        {
            category: "Photography",
            image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
        },
        {
            category: "Music",
            image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
        },
        {
            category: "Art",
            image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
        },
        {
            category: "sPhotography",
            image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
        },
        {
            category: "sPhotography",
            image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
        },
        {
            category: "hotography",
            image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
        },
        {
            category: "Phtography",
            image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
        },
        {
            category: "Photograhy",
            image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
        },
        {
            category: "Photographys",
            image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
        },
        {
            category: "Photograph",
            image: "https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA.",
        },
    ]
    const categoriesPerPage = 6
    const numPages = Math.ceil(categories.length / categoriesPerPage)
    const startIndex = page * categoriesPerPage
    const endIndex = (page + 1) * categoriesPerPage

    return (
        <div style={{ padding: "20px 120px 20px 120px" }}>
            <Grid container spacing={3}>
                {categories.slice(startIndex, endIndex).map((category) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <motion.div
                            style={{ maxWidth: 345 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <CategoryCard
                                image="https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA."
                                category={category.category}
                            />
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                }}
            >
                <button onClick={handlePrevPage} disabled={page === 0}>
                    Prev
                </button>
                <div style={{ margin: "0 20px" }}>
                    Page {page + 1} of {numPages}
                </div>
                <button
                    onClick={handleNextPage}
                    disabled={page === numPages - 1}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default CategoryListCards
