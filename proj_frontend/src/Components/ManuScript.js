import * as React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1"
import Popover from "@mui/material/Popover"
import { Box, Divider, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import Paper from "@mui/material/Paper"
import { motion } from "framer-motion"
import MintNFT from "./MintNFT"
import { useNavigate } from "react-router-dom"
import CategoryListCards from "./CategoryListCards"
import Testing from "./Testing"
import DropDownMenu from "./DropDownMenu"
import Filter from "./Filter"
import AddIcon from "@mui/icons-material/Add"

const { setDocument, getDocument } = require("../auth/helper/index")

const ManuScript = (manuscript) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [file, setFile] = React.useState(null)
    const [values, setValues] = React.useState({
        title: "Temp Screenshot",
        category: "641d9a3fd64567a22867dbb9",
        description: "Temp Screenshot",
        document: file,
    })
    const [nftMinted, setNFTMinted] = React.useState(false)
    const navigate = useNavigate()
    const { title, category, description, document } = values
    const [documents, setDocuments] = React.useState([])

    console.log(`Manuscript Form Click ${JSON.stringify(manuscript)}`)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleFileUpload = (event) => {
        setFile(event.target.files[0])
        if (file !== null) {
            postRequestToSetDocument()
        }
    }

    const postRequestToSetDocument = () => {
        setDocument({ ...values, document: file })
            .then((data) => {
                if (data.error) {
                    // console.log("IN DATA.ERROR");
                } else {
                    // console.log("NOT IN DATA.ERROR");
                }
            })
            .catch(console.log("Manuscript upload failed"))
    }

    const postRequestToGetDocument = () => {
        // console.log("in postRequestToGetDocument");
        getDocument().then((response) => {
            // console.log(response)
            setDocuments(response)
            // console.log("response => ", response[0]?.document?.data)
            // let pdf = new Buffer.from(response[0]?.document?.data).toString(
            //     "base64"
            // )
            // console.log("data:image/pdf;base64" + pdf)
            // setDocuments(response[1]?.document?.data?.data)

            // if (response.error) {
            //     console.log("IN DATA.ERROR")
            // } else {
            //     console.log("NOT IN DATA.ERROR")
            // }
        })
    }

    const [toggle, setToggle] = React.useState(false)

    const FileView = () => {
        console.log(documents)
        const blob = new Blob([new Uint8Array(documents)], {
            type: "image/png",
        })
        const url = URL.createObjectURL(blob)
        console.log(url)
        setToggle(true)
        return (
            <ul>
                {/* <img src={url} alt="File from backend" /> */}
                {/* <div>
          <embed
            src={url}
            type="application/pdf"
            width="100%"
            height="600px"
          ></embed>
        </div> */}
                <img src={url} alt="image" />
            </ul>
        )
    }

    const open = Boolean(anchorEl)
    const id = open ? "simple-popover" : undefined

    return (
        <div>
            <Box sx={{ display: "flex", mt: "100px" }} justifyContent="center">
                <motion.div
                    whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.3 },
                    }}
                >
                    <Grid sx={{ mr: "20px" }}>
                        <Paper
                            elevation={10}
                            sx={{
                                height: "100px",
                                width: "420px",
                                borderRadius: "15px",
                            }}
                        >
                            <Box>
                                <Button
                                    sx={{
                                        m: "30px 0px 100px 90px",
                                        height: "50px",
                                        width: "25ch",
                                        fontSize: "18px",
                                    }}
                                    aria-describedby={id}
                                    variant="contained"
                                    onClick={handleClick}
                                    startIcon={
                                        <PersonAddAlt1Icon fontSize="large" />
                                    }
                                >
                                    Add member
                                </Button>
                            </Box>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                            >
                                <Typography
                                    sx={{
                                        mt: "2ch",
                                        textAlign: "center",
                                        mb: "1.5ch",
                                    }}
                                >
                                    Invite Memebers
                                </Typography>
                                <Divider variant="middle" />
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="flex-end"
                                    sx={{ p: "0ch 5ch 5ch 5ch" }}
                                >
                                    <TextField
                                        id="standard-basic"
                                        label="Email"
                                        variant="standard"
                                    />
                                    <Button
                                        variant="contained"
                                        component="label"
                                        sx={{ height: "4ch", width: "10ch" }}
                                    >
                                        Add
                                    </Button>
                                </Stack>
                            </Popover>
                        </Paper>
                    </Grid>
                </motion.div>

                <motion.div
                    whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.3 },
                    }}
                >
                    <Grid>
                        <Paper
                            elevation={10}
                            sx={{
                                alignContent: "center",
                                height: "100px",
                                width: "420px",
                                borderRadius: "15px",
                            }}
                        >
                            <Box>
                                <Button
                                    variant="contained"
                                    component="label"
                                    onClick={() => {
                                        navigate("/manuscriptform", {
                                            state: {
                                                Role: manuscript.role,
                                                LoginCredentials:
                                                    manuscript.loginCredentials,
                                            },
                                        })
                                    }}
                                    sx={{
                                        m: "30px 0px 100px 90px",
                                        height: "50px",
                                        width: "25ch",
                                        fontSize: "18px",
                                    }}
                                >
                                    {/* <UploadFileOutlinedIcon
                                        fontSize="medium"
                                        sx={{ mr: "4px" }}
                                    />
                                    <input
                                        hidden
                                        onChange={handleFileUpload}
                                        accept="image/*"
                                        multiple
                                        type="file"
                                    /> */}
                                    Add ManuScript
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </motion.div>
            </Box>
            <br />
            <Divider />

            {/* <button
                className="button ptimary"
                onClick={postRequestToGetDocument}
            >
                {" "}
                Click here to Get Data
            </button> */}
            <br />
            {/* <MintNFT /> */}
            {/* {<FileView/>} */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate("/manuscriptform", {
                            state: {
                                Role: manuscript.role,
                                LoginCredentials: manuscript.loginCredentials,
                            },
                        })
                    }}
                    startIcon={<AddIcon />}
                >
                    Add ManuScript
                </Button>
            </div>
            <Filter />

            {/* <CategoryCard
                image="https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA."
                category="new Card"
            /> */}
            {/* <CategoryCard
                image="https://gateway.pinata.cloud/ipfs/QmbLiP651PnJ7Me8ZsFY1DYHA5GdeNipKmntBpH1yE5gKf?_gl=1*1yqdojl*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ1MDYwNy4yLjEuMTY4MzQ1MDYxNS41Mi4wLjA."
                category="new Card"
            /> */}
            {/* <CategoryListCards />
            <br />
            <DropDownMenu />
            <Testing
                pdfLink="https://gateway.pinata.cloud/ipfs/QmSUEgxnM8VSxshy47iSX3xsAcSrYDqSTnmkLG1QuXRmNa?_gl=1*nllcqw*rs_ga*OGQxOWJlNjQtYTkwYi00ZDMzLTkyNTctNGVlMzA5NmQyZjkz*rs_ga_5RMPXG14TE*MTY4MzQ3MTc3OS4zLjEuMTY4MzQ3MjMwOC41NS4wLjA.
"
            />
            <DropDownMenu /> */}
        </div>
    )
}

export default ManuScript
