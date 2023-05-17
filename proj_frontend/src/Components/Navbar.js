import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import { useNavigate } from "react-router-dom"
import { signout } from "../auth/helper/index"
import { Page } from "react-pdf"

var page = ["Home"]
const studentPages = ["Ideas", "Manuscript"]
const supervisorPages = ["Upload Ideas", "View Approvals"]
const adminPages = ["Manage Account"]
const settings = ["Profile", "Change Role", "Status", "Logout"]

function Navbar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)
    const [activeMenuItem, setActiveMenuItem] = React.useState(props.event)
    const navigate = useNavigate()
    // const [select, setSelect] = React.useState('Home')

    // accessing the session information of the logged-in user from the local storage of the browser
    const needToParse = localStorage.getItem("jwt")
    const sessionInfo = JSON.parse(needToParse)

    const pages = page.concat(
        props.role === "admin"
            ? adminPages
            : props.role === "supervisor"
            ? supervisorPages
            : props.role === "student"
            ? studentPages
            : ""
    )

    const Logout = (event) => {
        console.log(event.target.value, " Logout")
        // if (event.target.value === "Logout") {

        // }
        localStorage.clear()
        signout()
        alert(
            "The user has been logged out successfully, Enter credentials to login"
        )
        navigate("/")
    }
    // {setting !== "Logout" ? setting : (isAuthenticated() && "Logout")}

    pages.push("Contact Us")

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = (event) => {
        // setActiveMenuItem(event)
        // setAnchorElNav(null)

        console.log(`Target Value : ${event}`)

        if (event === "Manuscript") {
            navigate("/manuscript", {
                state: {
                    Role: props.role,
                    LoginCredentials: props.loginCredentials,
                },
            })
        } else if (event === "Home") {
            navigate("/gallery", {
                state: {
                    Role: props.role,
                    LoginCredentials: props.loginCredentials,
                },
            })
        } else if (event.currentTarget.value === "Manuscript") {
            navigate("/manuscript", {
                state: {
                    Role: props.role,
                    LoginCredentials: props.loginCredentials,
                },
            })
        } else if (event.currentTarget.value === "Ideas") {
            navigate("/ideas", {
                state: {
                    Role: props.role,
                    LoginCredentials: props.loginCredentials,
                },
            })
        } else if (event.currentTarget.value === "Upload Ideas") {
            navigate("/uploadideas")
        } else if (event.currentTarget.value === "View Approvals") {
            navigate("/showrequests")
        } else if (event.currentTarget.value === "Manage Account") {
            navigate("/adminpage")
        }
    }

    const handleOpenMenu = (event) => {
        setActiveMenuItem(event)
        setAnchorElNav(null)
        handleCloseNavMenu(event)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="p"
                        // href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                            "&:hover": {
                                // fontWeight: "bold",
                                // color: "#000",
                            },
                        }}
                    >
                        VOUCH PENMANSHIP
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={() => handleOpenMenu(page)}
                                    selected={activeMenuItem === page}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <AdbIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        VOUCH PENMANSHIP
                    </Typography>

                    <Box
                        justifyContent="center"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleOpenMenu(page)}
                                sx={{
                                    my: 2,
                                    display: "block",
                                    ml: 2,
                                    fontSize: "16px",
                                    position: "relative",
                                    color: "white",
                                    "&::after": {
                                        content: "''",
                                        position: "absolute",
                                        left: 0,
                                        right: 0,
                                        bottom:
                                            activeMenuItem === page
                                                ? "-2px"
                                                : 0,
                                        height: "2px",
                                        background:
                                            activeMenuItem === page
                                                ? "white"
                                                : "transparent",
                                    },
                                }}
                                value={page}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip
                            title={
                                sessionInfo.object.firstName +
                                " " +
                                sessionInfo.object.lastName
                            }
                        >
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt={
                                        sessionInfo.object.firstName.charAt(0) +
                                        sessionInfo.object.lastName.charAt(0)
                                    }
                                    src="/static/images/avatar/2.jpg"
                                >
                                    {sessionInfo.object.firstName.charAt(0)}
                                    {sessionInfo.object.lastName.charAt(0)}
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/* {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))} */}
                            <MenuItem key="Logout" onClick={Logout}>
                                <Typography textAlign="center">
                                    Logout
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Navbar
