import React, { useEffect, useState } from "react"
import { Grid, Box, Typography, Divider, Paper } from "@mui/material"
import NFTCard from "./NFTCard"
import { getSupervisorById } from "../auth/helper"
import Navbar from "./Navbar"

const NFTListCard = ({ NFTDocuments, role, loginCredentials }) => {
    const [supervisorListName, setSupervisorListName] = useState([])
    const [access, setAccess] = useState(false)
    const Elements = [
        { id: 0, nftimage: "image1.jpg", supervisorname: "Sir Umar Aftab" },
        { id: 1, nftimage: "image2.jpg", supervisorname: "Sir Rizwan Ul Haq" },
        { id: 2, nftimage: "image3.jpg", supervisorname: "Sir Bilal Khan" },
        { id: 3, nftimage: "image4.jpg", supervisorname: "Sir Abdul Qadeer" },
        { id: 4, nftimage: "image5.jpg", supervisorname: "Mam Saba" },
        { id: 5, nftimage: "image6.jpg", supervisorname: "Mam Pariwish" },
        { id: 6, nftimage: "image7.jpg", supervisorname: "Mam Sehar" },
        { id: 7, nftimage: "image8.jpg", supervisorname: "Sir Tahir" },
        { id: 8, nftimage: "image9.jpg", supervisorname: "Sir Sajid" },
        { id: 9, nftimage: "image10.jpg", supervisorname: "Mam Ayesha" },
        { id: 10, nftimage: "image11.jpg", supervisorname: "Sir Daanyal" },
        { id: 11, nftimage: "image12.jpg", supervisorname: "Sir Azeem" },
    ]

    useEffect(() => {
        const getSupervisorFetch = async () => {
            NFTDocuments.map(async (document) => {
                // return await getSupervisorById(document.supervisor)
                const data = await getSupervisorById(document.supervisor)
                setSupervisorListName(() => {
                    setSupervisorListName([...supervisorListName, data])
                })
            })
        }
        console.log(role)
        console.log(loginCredentials)
        getSupervisorFetch()
    }, [])

    // console.log(
    //     `NFT Document List : ${JSON.stringify(
    //         getSupervisorById("6463f0fc7cc9df24428bd753")
    //     )}`
    // )

    return NFTDocuments.length !== 0 ? (
        <Box>
            <Box
                sx={{
                    py: 2,
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ccc",
                    mt: 8,
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    color="primary"
                    sx={{ mb: 1 }}
                >
                    Explore This Category
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{ color: "#666" }}
                >
                    Discover the best items in this category
                </Typography>
            </Box>

            <Grid
                item
                container
                spacing={2}
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    mt: 3,
                    pb: 2,
                    pl: 2,
                    pr: 2,
                }}
            >
                {NFTDocuments.length !== 0 &&
                    NFTDocuments.map((document, index) => {
                        return (
                            <Grid key={document._id} item xs={12} sm={6} md={4}>
                                <NFTCard
                                    key={NFTDocuments._id}
                                    nftimage={Elements[index]["nftimage"]}
                                    supervisorname={
                                        Elements[index]["firstName"]
                                    }
                                    link={document.documentUrl}
                                    title={document.title}
                                />
                            </Grid>
                        )
                    })}
            </Grid>
        </Box>
    ) : (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Paper sx={{ padding: "2rem", textAlign: "center" }}>
                <Typography variant="h6" gutterBottom>
                    No Records Found
                </Typography>
                <Typography variant="body1">
                    There are no records to display.
                </Typography>
            </Paper>
        </Box>
    )
}

export default NFTListCard
