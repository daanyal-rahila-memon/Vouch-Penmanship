import * as React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import IconButton from "@mui/material/IconButton"
import TwitterIcon from "@mui/icons-material/Twitter"
import GitHubIcon from "@mui/icons-material/GitHub"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: "primary.dark",
                backgroundImage: "linear-gradient(to right, #1868B7, #1868B7)",
                py: 8,
                mt: 10,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="h6"
                            sx={{ mb: 2, fontSize: "1.2rem" }}
                            color="#FFFFFF"
                        >
                            About Us
                        </Typography>
                        <Typography variant="body2" color="#FFFFFF">
                            Vouch Penmanship is a Web-based application that
                            protects your work and credits. It allows user to
                            create his own portal, view previous works, and
                            store new work. It stores your scanned documents on
                            the online shared repository as well as creates NFT
                            of them, stores them on Ethereum (with user
                            consent), and enhances the security of your research
                            work. Users can pay for their NFTs using Ethereum -
                            a cryptocurrency. This project uses blockchain
                            technology to protect the author's rights and
                            prevent theft.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ mb: 2 }} color="#FFFFFF">
                            Quick Links
                        </Typography>
                        <Typography variant="body2">
                            <Link
                                href="#"
                                color="#FFFFFF"
                                sx={{
                                    "&:hover": {
                                        fontWeight: "bold",
                                        textDecoration: "none",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                    },
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                }}
                            >
                                Home
                            </Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link
                                href="#"
                                color="#FFFFFF"
                                sx={{
                                    "&:hover": {
                                        fontWeight: "bold",
                                        textDecoration: "none",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                    },
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                }}
                            >
                                Marketplace
                            </Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link
                                href="#"
                                color="#FFFFFF"
                                sx={{
                                    "&:hover": {
                                        fontWeight: "bold",
                                        textDecoration: "none",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                    },
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                }}
                            >
                                Blog
                            </Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link
                                href="#"
                                color="#FFFFFF"
                                sx={{
                                    "&:hover": {
                                        fontWeight: "bold",
                                        textDecoration: "none",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                    },
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                }}
                            >
                                FAQs
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ mb: 2 }} color="#FFFFFF">
                            Connect with Us
                        </Typography>
                        <Box sx={{ display: "flex" }}>
                            <IconButton href="#" target="_blank" rel="noopener">
                                <TwitterIcon
                                    style={{ color: "#FFFFFF" }}
                                    sx={{ "&:hover": { color: "#E1306C" } }}
                                />
                            </IconButton>
                            <IconButton href="#" target="_blank" rel="noopener">
                                <GitHubIcon
                                    style={{ color: "#FFFFFF" }}
                                    sx={{ "&:hover": { color: "#6e5494" } }}
                                />
                            </IconButton>
                            <IconButton href="#" target="_blank" rel="noopener">
                                <InstagramIcon
                                    style={{ color: "#FFFFFF" }}
                                    sx={{ "&:hover": { color: "#E1306C" } }}
                                />
                            </IconButton>
                            <IconButton href="#" target="_blank" rel="noopener">
                                <LinkedInIcon
                                    style={{ color: "#FFFFFF" }}
                                    sx={{ "&:hover": { color: "#0e76a8" } }}
                                />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Typography
                    variant="body2"
                    align="center"
                    sx={{ mt: 6 }}
                    color="#FFFFFF"
                >
                    © {new Date().getFullYear()} Vouch Penmanship. All rights
                    reserved.
                </Typography>
            </Container>
        </Box>
    )
}
export default Footer
