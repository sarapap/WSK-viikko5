import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postFile, useMedia } from "../hooks/APIHooks";

const Upload = () => {
    const [file, setFile] = useState();
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { postMedia } = useMedia();

    const doUpload = async () => {
        try {
            const uploadResult = await postFile(file, token);
            console.log('doUpload', uploadResult);

            const postMediaResult = await postMedia(uploadResult, inputs, token);
            console.log('post media result', postMediaResult);

            navigate('/');
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        doUpload();
    };

    const handleFileChange = (event) => {
        if (event.target.files) {
            console.log(event.target.files[0]);
            setFile(event.target.files[0]);
        }
    };

    const handleInputChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <h1>Upload</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        type="text"
                        id="title"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        rows={5}
                        id="description"
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="file">File</label>
                    <input
                        name="file"
                        type="file"
                        id="file"
                        accept="image/*, video/*"
                        onChange={handleFileChange}
                    />
                </div>
                <img
                    src={
                        file
                            ? URL.createObjectURL(file)
                            : "https://via.placeholder.com/200?text=Choose+image"
                    }
                    alt="preview"
                    width="200"
                />
                <button
                    type="submit"
                    disabled={file && inputs.title.length > 3 ? false : true}>
                    Upload
                </button>
            </form>
        </>
    );
};

export default Upload;
