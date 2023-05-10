import React, { useState } from "react"
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material"

function Filter() {
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)

    const handleFilterButtonClick = () => {
        setShowCategoryDropdown(!showCategoryDropdown)
    }

    return (
        <div>
            <Button variant="contained" onClick={handleFilterButtonClick}>
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
                            defaultValue=""
                            style={{ width: "200px" }}
                        >
                            <MenuItem value="">All Categories</MenuItem>
                            <MenuItem value="electronics">Electronics</MenuItem>
                            <MenuItem value="clothing">Clothing</MenuItem>
                            <MenuItem value="books">Books</MenuItem>
                            <MenuItem value="home">Home & Living</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            )}
        </div>
    )
}

export default Filter
