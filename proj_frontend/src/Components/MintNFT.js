import React, { useState } from "react"
import { Button, TextField } from "@mui/material"
// import { connectWallet, mintNFTs, getNFT } from "../utils/interact"
import { title } from "process"

const MintNFT = () => {
    const [file, setFile] = useState(null)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [walletAddress, setWalletAddress] = useState("")
    const [tkURI, setTkURI] = useState()
    const [displayNFT, setDisplayNFT] = useState("")
    const [imgNFT, setImgNFT] = useState("Hello")

    // const connectWalletPressed = async () => {
    //     // const walletResponse = await connectWallet()
    //     setStatus(walletResponse.status)
    //     setWalletAddress(walletResponse.address)
    // }

    // const onMintPressed = async () => {
    //     const { status, tokenURI } = await mintNFTs(file, name, description)
    //     setStatus(status)
    //     setTkURI(tokenURI)
    // }

    const handleFileUpload = (e) => {
        setFile(e.target.files[0])
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    // const onSetImgNFT = async () => {
    //     setImgNFT(await getNFT())
    // }

    return (
        <div>
            <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
            />
            <br />
            <TextField
                label="Description"
                variant="outlined"
                value={description}
                onChange={handleDescriptionChange}
            />
            <br />
            <input accept="image/*" type="file" onChange={handleFileUpload} />
            <br />
            <Button
                variant="contained"
                color="primary"
                // onClick={onMintPressed}
                disabled={!file || !name || !description}
            >
                Mint NFT
            </Button>
            <Button
                disabled={!file || !name || !description}
                // onClick={connectWalletPressed}
            >
                connect to wallet
            </Button>
            {/* <imag scr={getNFT} alt="MyNFT" /> */}
            {/* <button onClick={onSetImgNFT}>display NFT</button> */}
            {/* <img src={displayNFT} alt="MNFT" /> */}
            <img src={imgNFT} alt="nftimg" />
            <p>{imgNFT}</p>
            <p>{status}</p>
        </div>
    )
}

export default MintNFT
