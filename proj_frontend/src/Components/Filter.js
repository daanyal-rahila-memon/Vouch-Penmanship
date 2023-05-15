import React, { useState, useEffect } from "react"
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material"
import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import FilterListIcon from "@mui/icons-material/FilterList"
import { getDocumentByCategory } from "../auth/helper"
import Testing from "./Testing"
import ManuScriptCard from "./ManuScriptCard"

function Filter() {
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
    const [documents, setDocuments] = useState(null)

    useEffect(() => {
        async function fetchDocumentData() {
            const document = await getDocumentByCategory("Blockchain")
            setDocuments(document)
        }
        fetchDocumentData()
    }, [])

    const handleFilterButtonClick = async () => {
        // const document = await getDocumentByCategory("Blockchain")
        // setDocuments(document)
        setShowCategoryDropdown(!showCategoryDropdown)
    }

    const handleDropdownChange = async (event) => {
        console.log(`selected value : ${event.target.value}`)
        const document = await getDocumentByCategory(event.target.value)
        setDocuments(document)
        console.log(`get document ${JSON.stringify(documents)}`)
        console.log(`get document ${JSON.stringify(document)}`)
        console.log(getManuscripts(document))
    }

    const getManuscripts = (documents) => {
        console.log("in Get Manuscripts")
        return documents.map((document) => {
            console.log(document)
            console.log(document.title)
            console.log(document.description)
            console.log(document.documentUrl)

            return (
                <Testing
                    pdfTitle={document.title}
                    pdfDescription={document.description}
                    pdfLink={document.documentUrl}
                />
            )
        })
    }

    return (
        <>
            <div>
                <Button
                    variant="contained"
                    onClick={handleFilterButtonClick}
                    startIcon={<FilterListIcon />}
                >
                    Filter
                </Button>

                {showCategoryDropdown && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        <FormControl size="small">
                            <Select
                                labelId="category-label"
                                defaultValue="Blockchain"
                                style={{ width: "200px" }}
                                onChange={handleDropdownChange}
                            >
                                <MenuItem value="All Categories">
                                    All Categories
                                </MenuItem>
                                <MenuItem value="Blockchain">
                                    Blockchain
                                </MenuItem>
                                <MenuItem value="Artificial Intelligence">
                                    Artificial Intelligence
                                </MenuItem>
                                <MenuItem value="Machine Learning">
                                    Machine Learning
                                </MenuItem>
                                <MenuItem value="AR/VR">AR/VR</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                )}
            </div>
            {documents && (
                <>
                    <Grid sx={{ padding: "5%" }} container spacing={4}>
                        {documents.map((document) => (
                            <Grid key={document._id} item xs={12} sm={6} md={4}>
                                <ManuScriptCard
                                    title={document.title}
                                    link={document.documentUrl}
                                    description={document.description}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </>
    )
}

export default Filter

{
    /* <motion.div
                                whileHover={{
                                    scale: 0.9,
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                
                            </motion.div> */
}
