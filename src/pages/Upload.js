import React, { useState } from "react";
import { css } from "@emotion/css";


const UploadPage = () => {
    const [examFile, setExamFile] = useState(null);
    const [notesFile, setNotesFile] = useState(null);

    const handleFileChange = (event, setFile) => {
        const file = event.target.files[0];
        if (file) {
            setFile(file);
        }
    };

    const containerStyle = css`
        background-color: #1e2a38;
        border-radius: 16px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        padding: 30px;
        max-width: 450px;
        text-align: center;
        color: white;
        font-family: "Poppins", sans-serif;
        margin: auto;
        margin-top: 100px;
    `;

    const headingStyle = css`
        font-size: 1.8em;
        margin-bottom: 25px;
        font-weight: 700;
    `;

    const fileUploadStyle = css`
        border: 3px dashed #4a90e2;
        border-radius: 12px;
        padding: 30px;
        margin-bottom: 25px;
        cursor: pointer;
        transition: background-color 0.3s ease, border-color 0.3s ease;
        &:hover {
            background-color: rgba(74, 144, 226, 0.1);
            border-color: #337ab7;
        }
    `;

    const labelStyle = css`
        display: block;
        font-size: 1.1em;
        color: #4a90e2;
        cursor: pointer;
        transition: color 0.3s ease;
        &:hover {
            color: #337ab7;
        }
    `;

    const buttonStyle = css`
        background-color: #4a90e2;
        border: none;
        padding: 14px 30px;
        font-size: 1.2em;
        color: white;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
        &:hover {
            background-color: #337ab7;
            transform: scale(1.05);
        }
    `;

    const fileDisplayStyle = css`
        margin-top: 10px;
        font-size: 1em;
        color: #fff;
    `;

    return (
        <div
            className={css`
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
                margin: 0;
            `}
        >
            <div className={containerStyle}>
                <h1 className={headingStyle}>Let's make your learning path more Personalized!</h1>

                <div className={fileUploadStyle}>
                    <input
                        type="file"
                        id="examResource"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e, setExamFile)}
                    />
                    {!examFile && (
                        <label htmlFor="examResource" className={labelStyle}>
                            Select Exam's Resource
                        </label>
                    )}
                    {examFile && <div className={fileDisplayStyle}>{examFile.name}</div>}
                </div>

                <div className={fileUploadStyle}>
                    <input
                        type="file"
                        id="yourNotes"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e, setNotesFile)}
                    />
                    {!notesFile && (
                        <label htmlFor="yourNotes" className={labelStyle}>
                            Select Your Notes
                        </label>
                    )}
                    {notesFile && <div className={fileDisplayStyle}>{notesFile.name}</div>}
                </div>

                <button className={buttonStyle}>Compare Documents</button>
            </div>
        </div>
    );
};

export default UploadPage;
