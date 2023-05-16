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
            id: 0,
            category: "Blockchain",
            image: "https://gateway.pinata.cloud/ipfs/QmccucKmFFPubHqFxQGLtnvjpNF6hJ5JpMRhxrzpuN5WbE?_gl=1*1n1ym02*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDA1MTAzNS43LjEuMTY4NDA1MTU5OS42MC4wLjA.",
        },
        {
            id: 1,
            category: "Data Science",
            image: "https://gateway.pinata.cloud/ipfs/QmVngDWmVKqygrwMhJDYCWVhSBtA7jacQnGAD1bh8URrpz?_gl=1*gu8p1x*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDA1MTAzNS43LjEuMTY4NDA1MTE2NS42MC4wLjA.",
        },

        {
            id: 2,
            category: "Cybersecurity",
            image: "https://gateway.pinata.cloud/ipfs/Qma8TtANX3nw9VwQabuzCTASxseMXog96fGTFM1vMAVhjn?_gl=1*12gzdlo*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4Mzk2MzYxOS40LjEuMTY4Mzk2NjA3OS42MC4wLjA.",
        },
        {
            id: 3,
            category: "Artificial Intelligence",
            image: "https://gateway.pinata.cloud/ipfs/QmYqd3CDYa74cmC1XJmNFyRbr1ujwBacMmvKcNbtEGieZZ?_gl=1*1vmhrho*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4Mzk2MzYxOS40LjEuMTY4Mzk2Njg2OS42MC4wLjA.",
        },
        {
            id: 4,
            category: "Internet of Things (IoT)",
            image: "https://gateway.pinata.cloud/ipfs/QmRA5wxsTYY4AEtaA9ZhJ63kjcoe7EcaZCeQwfhbLz5eq3?_gl=1*rcbsru*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4Mzk2MzYxOS40LjEuMTY4Mzk2NzExNy42MC4wLjA.",
        },
        {
            id: 5,
            category: "Cloud Computing",
            image: "https://gateway.pinata.cloud/ipfs/QmbVpXbPGYU7p1LsR4Dy24LzQ65kC3HLji7vtBqUTV4Qin?_gl=1*13tpf6e*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4Mzk2MzYxOS40LjEuMTY4Mzk2NjQ1OC42MC4wLjA.",
        },

        {
            id: 6,
            category: "Virtual Reality (VR) and Augmented Reality (AR)",
            image: "https://gateway.pinata.cloud/ipfs/QmeuHCW6oMwEYbcSzp1ad95LMt19DVxgMhfvStSgr3ABWo?_gl=1*h7rkdh*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDA0ODUxMS42LjAuMTY4NDA0ODUxMS42MC4wLjA.",
        },
        {
            id: 7,
            category: "Robotics",
            image: "https://gateway.pinata.cloud/ipfs/QmWMyXd45YhYNo9svYhaELxEd1MD2wczEJmahXgrqqFECQ?_gl=1*1m0sq19*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDA0ODUxMS42LjEuMTY4NDA0ODk4MC42MC4wLjA.",
        },
        {
            id: 8,
            category: "Machine Learning",
            image: "https://gateway.pinata.cloud/ipfs/QmPm4J11DTKZpX2RXMaWXeD798XYxwz8VSBxM9UVQbj47f?_gl=1*1ipqzko*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4Mzk2MzYxOS40LjAuMTY4Mzk2MzYxOS42MC4wLjA.",
        },
        {
            id: 9,
            category: "Quantum Computing",
            image: "https://gateway.pinata.cloud/ipfs/QmfFur3rG5Jj9Yu9QzTQ9bMNzSJwReFU9TxczNx5wiPmot?_gl=1*o2yink*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDAyMDA5NC41LjEuMTY4NDAyMDE0OC42LjAuMA..",
        },
        {
            id: 10,
            category: "Big Data",
            image: "https://gateway.pinata.cloud/ipfs/QmThWjoArredTWch3v6N5VrRaP2yHuAsEdDVgtbWJaPwX4?_gl=1*1lau4m9*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4NDAyMDA5NC41LjEuMTY4NDAyMDUxMC42MC4wLjA.",
        },
        {
            id: 11,
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
                    <Grid key={category.id} item xs={12} sm={6} md={4}>
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
