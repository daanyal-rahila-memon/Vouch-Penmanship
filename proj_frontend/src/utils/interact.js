import { ethers } from "ethers"
import { pinJSONToIPFS, uploadFileToIPFS } from "./pinata"
import contractABI from "../MyNFT.json"
import axios, * as others from "axios"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")

const ALCHEMY_API_KEY =
    "https://eth-goerli.g.alchemy.com/v2/gMKearN4ZYg_4Si5m_TL8zsypT4e7GQ"
const PRIVATE_KEY =
    "6fbe8baf7f246652782f97ebcaa4020d72e78b6653eac12cbc8ac578202941d6"

const web3 = createAlchemyWeb3(ALCHEMY_API_KEY)
const contractAddress = "0x6e8D7c1a4e81A850eA0F08134a7F52A0e50BB62c"

// PINATA_KEY=3a21c54322c1759d88a0
// PINATA_SECRET_KEY=68be2dc7f79e5e1f2be38608e2c4035eaf08842dfc0d855185476b3c7638bced
// PINATA_JWT=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyOWZmNGM0Ny1lMTVkLTRkZDgtOGU4NC1iZjNmOWM1MDI0ODciLCJlbWFpbCI6Im11aGRiaWxhbDgxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIzYTIxYzU0MzIyYzE3NTlkODhhMCIsInNjb3BlZEtleVNlY3JldCI6IjY4YmUyZGM3Zjc5ZTVlMWYyYmUzODYwOGUyYzQwMzVlYWYwODg0MmRmYzBkODU1MTg1NDc2YjNjNzYzOGJjZWQiLCJpYXQiOjE2NzkyNTYyMTN9.llEUcKcHbButut7-jje7TnhcTef8o4z8helzkpr_owI

//

const alchemyKey = ALCHEMY_API_KEY

export const connectWallet = async () => {
    if (window.ethereum) {
        console.log(alchemyKey)
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            })

            const obj = {
                status: "👆🏽 Write a message in the text-field above.",
                address: provider,
            }
            return obj
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            }
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a
                            target="_blank"
                            href={`https://metamask.io/download.html`}
                        >
                            You must install Metamask, a virtual Ethereum
                            wallet, in your browser.
                        </a>
                    </p>
                </span>
            ),
        }
    }
}

function extractCidFromPinataUrl(pinataUrl) {
    const url = new URL(pinataUrl)
    const path = url.pathname
    const trimmedPath = path.replace(/^\/+|\/+$/g, "")
    const pathSegments = trimmedPath.split("/")
    const cid = pathSegments[pathSegments.length - 1]
    return cid
}

export const mintNFTs = async (url, name, description) => {
    console.log(url + name + description)
    if (name.trim() == "") {
        return {
            success: false,
            status: "Please make sure all fields are completed before minting.",
            tokenURI: "",
        }
    } else {
        const pinataResponseUpload = await uploadFileToIPFS(url)
        if (pinataResponseUpload.success) {
            console.log("file uploaded successfully")
            console.log(pinataResponseUpload.pinataURL)
            return {
                success: true,
                status: "File uploaded successfully",
                tokenURI: pinataResponseUpload.pinataURL,
            }
        }

        // const metadata = new Object()
        // metadata.name = name
        // metadata.url = pinataResponseUpload.pinataURL
        // metadata.description = description

        // const pinataResponse = await pinJSONToIPFS(metadata)

        // if (!pinataResponse.success) {
        //     return {
        //         success: false,
        //         status: "😢 Something went wrong while uploading your tokenURI.",
        //         tokenURI: "",
        //     }
        // } else {
        //     const tokenURI = pinataResponse.pinataUrl
        //     const response = await fetch(tokenURI)
        //     const jsonData = await response.json()
        //     console.log(`checking: ${pinataResponseUpload.pinataIpfsHash}`)

        //     window.contract = await new web3.eth.Contract(
        //         contractABI.abi,
        //         contractAddress
        //     )

        //     const transactionParameters = {
        //         to: contractAddress, // Required except during contract publications.
        //         from: window.ethereum.selectedAddress, // must match user's active address.
        //         data: window.contract.methods
        //             .mintNFT(
        //                 window.ethereum.selectedAddress,
        //                 tokenURI,
        //                 pinataResponseUpload.pinataIpfsHash
        //             )
        //             .encodeABI(), //make call to NFT smart contract
        //     }

        //     // sign
        //     try {
        //         const txHash = await window.ethereum.request({
        //             method: "eth_sendTransaction",
        //             params: [transactionParameters],
        //         })
        //         return {
        //             success: true,
        //             status: "https://gateway.pinata.cloud/ipfs/" + txHash,
        //         }
        //     } catch (error) {
        //         return {
        //             success: false,
        //             status: "😥 Something went wrong: " + error.message,
        //         }
        //     }
        // }
    }
}

export const onMinting = async (url, name, description) => {
    const metadata = new Object()
    metadata.name = name
    metadata.url = url
    metadata.description = description

    const pinataResponse = await pinJSONToIPFS(metadata)

    if (!pinataResponse.success) {
        return {
            success: false,
            status: "Something went wrong while uploading your tokenURI.",
            tokenURI: "",
        }
    } else {
        const tokenURI = pinataResponse.pinataUrl
        const response = await fetch(tokenURI)
        const jsonData = await response.json()
        console.log(`checking: ${tokenURI}`)
        console.log(`imghash: ${extractCidFromPinataUrl(url)}`)

        const cid = extractCidFromPinataUrl(url)

        window.contract = await new web3.eth.Contract(
            contractABI.abi,
            contractAddress
        )

        const transactionParameters = {
            to: contractAddress, // Required except during contract publications.
            from: window.ethereum.selectedAddress, // must match user's active address.
            data: window.contract.methods
                .mintNFT(
                    window.ethereum.selectedAddress,
                    tokenURI,
                    extractCidFromPinataUrl(url)
                )
                .encodeABI(), //make call to NFT smart contract
        }

        try {
            const txHash = await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [transactionParameters],
            })
            return {
                success: true,
                status: "https://gateway.pinata.cloud/ipfs/" + txHash,
            }
        } catch (error) {
            return {
                success: false,
                status: "Something went wrong: " + error.message,
            }
        }
    }
}

export const getNFT = async () => {
    const network = "goerli"
    const tokenId = 2
    const alchemyProvider = new ethers.providers.AlchemyProvider(
        network,
        "gMKearN4ZYg_4Si5m_TL8zsypT4e7GQ_"
    )
    const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider)

    const contract = await new ethers.Contract(
        contractAddress,
        contractABI.abi,
        signer
    )

    const blockchaindata = await contract.tokenURI(tokenId)
    console.log(`BlockChain Data : ${blockchaindata}`)
    return axios
        .get(blockchaindata, {
            headers: {
                Accept: "text/plain",
            },
        })
        .then((response) => {
            const metadata = response.data
            console.log(`NFT Image : ${metadata.url}`)
            return metadata.url
        })
        .catch((error) => {
            console.error(error)
        })
}
