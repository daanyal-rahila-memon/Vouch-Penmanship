import React, { useState } from "react"

function FileChooser() {
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }

    return (
        <>
            <input
                type="file"
                id="file-chooser"
                style={{ display: "none" }}
                onChange={handleFileSelect}
            />
            <label
                htmlFor="file-chooser"
                style={{
                    display: "inline-block",
                    padding: "12px 24px",
                    backgroundColor: "#4caf50",
                    color: "#fff",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Choose File
            </label>
            {selectedFile && <p>{selectedFile.name}</p>}
        </>
    )
}

export default FileChooser
