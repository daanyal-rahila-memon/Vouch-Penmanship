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
            id: 1,
            category: "Blockchain",
            image: "https://gateway.pinata.cloud/ipfs/QmccucKmFFPubHqFxQGLtnvjpNF6hJ5JpMRhxrzpuN5WbE?_gl=1*1n1ym02*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDA1MTAzNS43LjEuMTY4NDA1MTU5OS42MC4wLjA.",
        },
        {
            category: "Data Science",
            image: "https://gateway.pinata.cloud/ipfs/QmVngDWmVKqygrwMhJDYCWVhSBtA7jacQnGAD1bh8URrpz?_gl=1*gu8p1x*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDA1MTAzNS43LjEuMTY4NDA1MTE2NS42MC4wLjA.",
        },

        {
            category: "Cybersecurity",
            image: "https://gateway.pinata.cloud/ipfs/Qma8TtANX3nw9VwQabuzCTASxseMXog96fGTFM1vMAVhjn?_gl=1*12gzdlo*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4Mzk2MzYxOS40LjEuMTY4Mzk2NjA3OS42MC4wLjA.",
        },
        {
            category: "Artificial Intelligence",
            image: "https://gateway.pinata.cloud/ipfs/QmYqd3CDYa74cmC1XJmNFyRbr1ujwBacMmvKcNbtEGieZZ?_gl=1*1vmhrho*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4Mzk2MzYxOS40LjEuMTY4Mzk2Njg2OS42MC4wLjA.",
        },
        {
            category: "Internet of Things (IoT)",
            image: "https://gateway.pinata.cloud/ipfs/QmRA5wxsTYY4AEtaA9ZhJ63kjcoe7EcaZCeQwfhbLz5eq3?_gl=1*rcbsru*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4Mzk2MzYxOS40LjEuMTY4Mzk2NzExNy42MC4wLjA.",
        },
        {
            category: "Cloud Computing",
            image: "https://gateway.pinata.cloud/ipfs/QmbVpXbPGYU7p1LsR4Dy24LzQ65kC3HLji7vtBqUTV4Qin?_gl=1*13tpf6e*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4Mzk2MzYxOS40LjEuMTY4Mzk2NjQ1OC42MC4wLjA.",
        },

        {
            category: "Virtual Reality (VR) and Augmented Reality (AR)",
            image: "https://gateway.pinata.cloud/ipfs/QmeuHCW6oMwEYbcSzp1ad95LMt19DVxgMhfvStSgr3ABWo?_gl=1*h7rkdh*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDA0ODUxMS42LjAuMTY4NDA0ODUxMS42MC4wLjA.",
        },
        {
            category: "Robotics",
            image: "https://gateway.pinata.cloud/ipfs/QmWMyXd45YhYNo9svYhaELxEd1MD2wczEJmahXgrqqFECQ?_gl=1*1m0sq19*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDA0ODUxMS42LjEuMTY4NDA0ODk4MC42MC4wLjA.",
        },
        {
            category: "Machine Learning",
            image: "https://gateway.pinata.cloud/ipfs/QmPm4J11DTKZpX2RXMaWXeD798XYxwz8VSBxM9UVQbj47f?_gl=1*1ipqzko*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4Mzk2MzYxOS40LjAuMTY4Mzk2MzYxOS42MC4wLjA.",
        },
        {
            category: "Quantum Computing",
            image: "https://gateway.pinata.cloud/ipfs/QmfFur3rG5Jj9Yu9QzTQ9bMNzSJwReFU9TxczNx5wiPmot?_gl=1*o2yink*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDAyMDA5NC41LjEuMTY4NDAyMDE0OC42LjAuMA..",
        },
        {
            category: "Big Data",
            image: "https://gateway.pinata.cloud/ipfs/QmThWjoArredTWch3v6N5VrRaP2yHuAsEdDVgtbWJaPwX4?_gl=1*1lau4m9*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDAyMDA5NC41LjEuMTY4NDAyMDUxMC42MC4wLjA.",
        },
        {
            category: "Mobile Applications",
            image: "https://gateway.pinata.cloud/ipfs/QmQdpdEXn2VWyGw1WWvcQLKQQmA7i2jQgZDQ1texzNky86?_gl=1*1keaz0c*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDAyMDA5NC41LjEuMTY4NDAyMTA0Mi42MC4wLjA.",
        },
    ]
    const categoriesPerPage = 6
    const numPages = Math.ceil(categories.length / categoriesPerPage)
    const startIndex = page * categoriesPerPage
    const endIndex = (page + 1) * categoriesPerPage

    return (
        <div style={{ padding: "20px 120px 20px 120px" }}>
            <Grid item container spacing={3}>
                {categories.slice(startIndex, endIndex).map((category) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <motion.div
                            style={{ maxWidth: 345 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <CategoryCard
                                image={category.image}
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
