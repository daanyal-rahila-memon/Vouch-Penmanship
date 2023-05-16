import React, { useEffect, useState } from "react"
import { Grid, Box, Typography } from "@mui/material"
import NFTCard from "./NFTCard"

const NFTListCard = ({ NFTDocuments }) => {
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

    return NFTDocuments.length !== 0 ? (
        <Box>
            <Grid
                item
                container
                spacing={2}
                sx={{ position: "relative", overflow: "hidden" }}
            >
                {NFTDocuments.length !== 0 &&
                    NFTDocuments.map((document) => {
                        return (
                            <Grid item xs={12} sm={6} md={4}>
                                <NFTCard
                                    key={NFTDocuments._id}
                                    nftimage={Elements[0]["nftimage"]}
                                    supervisorname={
                                        Elements[0]["supervisorname"]
                                    }
                                    link={document.documentUrl}
                                />
                            </Grid>
                        )
                    })}
            </Grid>
        </Box>
    ) : (
        <Typography variant="h6">No Record found</Typography>
    )
}

export default NFTListCard
