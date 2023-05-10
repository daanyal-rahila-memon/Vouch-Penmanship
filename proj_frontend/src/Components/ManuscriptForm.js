// import { Form, Button } from "react-bootstrap"
// import { setDocument } from "../auth/helper"
// import React, { useState } from "react"
// import { connectWallet, mintNFTs, getNFT } from "../utils/interact"
// import { useNavigate } from "react-router-dom"

// function ManuscriptForm() {
//     const [title, setTitle] = useState("")
//     const [category, setCategory] = useState("")
//     const [description, setDescription] = useState("")
//     const [documentUrl, setDocumentUrl] = useState()
//     const [errors, setErrors] = useState({})
//     const [file, setFile] = useState(null)

//     const [status, setStatus] = useState("")
//     const [walletAddress, setWalletAddress] = useState("")
//     const [tkURI, setTkURI] = useState()
//     const [displayNFT, setDisplayNFT] = useState("")
//     const [imgNFT, setImgNFT] = useState("Hello")

//     const connectWalletPressed = async () => {
//         const walletResponse = await connectWallet()
//         setStatus(walletResponse.status)
//         setWalletAddress(walletResponse.address)
//     }

//     const onMintPressed = async () => {
//         const { status, tokenURI } = await mintNFTs(file, title, description)

//         setStatus(status)

//         // console.log("On Mint Pressed")
//         setTkURI(tokenURI)
//         await setDocumentUrl(tokenURI)
//         await postRequestToSetDocument()
//     }

//     const handleFileUpload = (e) => {
//         setFile(e.target.files[0])
//     }

//     const onSetImgNFT = async () => {
//         setImgNFT(await getNFT())
//         // console.log(imgNFT)
//     }

//     const validateForm = () => {
//         const errors = {}
//         if (title.toString().trim() === "") {
//             errors.title = "Title is required"
//         }
//         if (category.toString().trim() === "") {
//             errors.category = "Category is required"
//         }
//         if (documentUrl.toString().trim() === "") {
//             errors.url = "URL is required"
//         }
//         setErrors(errors)
//         return Object.keys(errors).length === 0
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         if (!validateForm()) {
//             return
//         }
//         // Do something with the form data
//     }

//     const navigate = useNavigate()

//     const postRequestToSetDocument = () => {
//         setDocument({ title, category, description, documentUrl })
//             .then((data) => {
//                 if (data.error) {
//                     // console.log("IN DATA.ERROR")
//                 } else {
//                     // console.log("NOT IN DATA.ERROR")
//                     navigate("/manuscript")
//                 }
//             })
//             .catch(console.log("Manuscript upload failed"))
//     }

//     return (
//         <div>
//             <br />
//             <br />
//             <br />
//             <br />
//             <Form
//                 onSubmit={handleSubmit}
//                 style={{ marginLeft: 20, marginRight: 20 }}
//             >
//                 <Form.Group controlId="formTitle">
//                     <Form.Label>Title</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={title}
//                         onChange={(event) => setTitle(event.target.value)}
//                         isInvalid={!!errors.title}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                         {errors.title}
//                     </Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group controlId="formCategory" style={{ marginTop: 10 }}>
//                     <Form.Label>Category</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={category}
//                         onChange={(event) => setCategory(event.target.value)}
//                         isInvalid={!!errors.category}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                         {errors.category}
//                     </Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group
//                     controlId="formDescription"
//                     style={{ marginTop: 10 }}
//                 >
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control
//                         as="textarea"
//                         rows={3}
//                         value={description}
//                         onChange={(event) => setDescription(event.target.value)}
//                     />
//                 </Form.Group>
//                 {/* <Form.Group controlId="formUrl" style={{ marginTop: 10 }}>
//                     <Form.Label>URL</Form.Label>
//                     <Form.Control
//                         type="url"
//                         value={documentUrl}
//                         onChange={(event) => setDocumentUrl(event.target.value)}
//                         isInvalid={!!errors.url}
//                     />
//                     <Form.Control.Feedback type="invalid">
//                         {errors.url}
//                     </Form.Control.Feedback>
//                 </Form.Group> */}
//                 <input
//                     accept="image/*"
//                     type="file"
//                     onChange={handleFileUpload}
//                 />

//                 <Button
//                     variant="primary"
//                     type="submit"
//                     style={{ marginTop: 10 }}
//                     onClick={onMintPressed}
//                 >
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     )
// }

// export default ManuscriptForm

// updated Manuscript Form

import React, { useEffect, useState } from "react"
import {
    TextField,
    Select,
    MenuItem,
    Button,
    Typography,
    FormControl,
    InputLabel,
    FormHelperText,
} from "@mui/material"

import { setDocument } from "../auth/helper"
import { mintNFTs } from "../utils/interact"
import { useNavigate } from "react-router-dom"
import { use } from "chai"

const allowedFileTypes = ["application/pdf"]

const ManuscriptForm = () => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)
    const [formError, setFormError] = useState("")

    const [documentUrl, setDocumentUrl] = useState("")
    const [status, setStatus] = useState("")

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file && allowedFileTypes.includes(file.type)) {
            setFile(file)
            setFormError("")
        } else {
            setFile(null)
            setFormError("Please choose a valid PDF file")
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!title || !category || !description || !file) {
            setFormError("Please fill out all required fields")
            return
        }
        await onFileUploadToIPFS()
    }

    const navigate = useNavigate()

    const onFileUploadToIPFS = async () => {
        console.log("on Mint pressed start")
        console.log(`All information ${file}  ${title} ${description}`)
        const { status, tokenURI } = await mintNFTs(file, title, description)
        setStatus(status)
        localStorage.setItem("tokenUrl", tokenURI)
        setDocumentUrl(tokenURI)
        console.log(`token url status : ${status}`)
        console.log(`token url : ${tokenURI}`)
        console.log(`document url : ${documentUrl}`)
        console.log("On Mint Pressed")
        console.log(status)
        await postRequestToSetDocument(tokenURI)
    }

    const postRequestToSetDocument = async (tokenURI) => {
        console.log(
            `\n All data here \n ${title} ${category} ${description} ${tokenURI}`
        )
        await setDocument({
            title,
            category,
            description,
            documentUrl: tokenURI,
        })
            .then((data) => {
                if (data.error) {
                    console.log("IN DATA.ERROR")
                } else {
                    console.log("NOT IN DATA.ERROR")
                    navigate("/manuscript")
                }
            })
            .catch(console.log("Manuscript upload failed"))
    }

    return (
        <div style={{ padding: "20px", paddingTop: "30px" }}>
            <form onSubmit={handleSubmit}>
                <Typography variant="h6" gutterBottom>
                    Submit a New Manuscript
                </Typography>
                <FormControl fullWidth margin="normal" required>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={handleTitleChange}
                        variant="outlined"
                    />
                </FormControl>
                <FormControl fullWidth margin="normal" required>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                        label="Category"
                        variant="outlined"
                    >
                        <MenuItem value="">-- Select --</MenuItem>
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                        <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                    <FormHelperText>Please select a category</FormHelperText>
                </FormControl>
                <FormControl fullWidth margin="normal" required>
                    <TextField
                        label="Description"
                        value={description}
                        onChange={handleDescriptionChange}
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                </FormControl>
                <FormControl fullWidth margin="normal" required>
                    <InputLabel
                        sx={{ marginLeft: "-12px" }}
                        htmlFor="file-input"
                    >
                        Upload a PDF file
                    </InputLabel>
                    <input
                        type="file"
                        id="file-input"
                        accept=".pdf"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                    <label htmlFor="file-input">
                        <Button
                            sx={{ mt: 5 }}
                            variant="outlined"
                            component="span"
                        >
                            Choose File
                        </Button>
                    </label>
                    {file && <p>{file.name}</p>}
                    {formError && (
                        <FormHelperText error>{formError}</FormHelperText>
                    )}
                </FormControl>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                >
                    Submit Manuscript
                </Button>
            </form>
        </div>
    )
}

export default ManuscriptForm