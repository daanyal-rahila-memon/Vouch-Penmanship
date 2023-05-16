import React, { useState } from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"

const options = ["Option 1", "Option 2", "Option 3", "Option 4"]

const StyledButton = styled(Button)({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
        boxShadow: "0 6px 6px -3px rgba(255, 105, 135, .3)",
    },
})

const StyledMenuItem = styled(MenuItem)({
    fontSize: "1.2rem",
    "&:hover": {
        background: "#F9F9F9",
    },
})

export default function MyPage() {
    const [anchorEl, setAnchorEl] = useState(null)
    const [selectedOption, setSelectedOption] = useState(options[0])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (option) => {
        setAnchorEl(null)
        setSelectedOption(option)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <StyledButton variant="contained" onClick={handleClick}>
                    {selectedOption}
                </StyledButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => handleClose(selectedOption)}
                >
                    {options.map((option) => (
                        <StyledMenuItem
                            key={option}
                            onClick={() => handleClose(option)}
                        >
                            {option}
                        </StyledMenuItem>
                    ))}
                </Menu>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Button variant="contained">Add Manuscript</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Button variant="contained">List of Cards</Button>
            </Grid>
        </Grid>
    )
}
