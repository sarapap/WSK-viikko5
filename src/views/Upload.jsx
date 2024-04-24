import { useState } from "react";

const Upload = () => {
    const [file, setFile] = useState(null);
    const [inputs, setInputs] = useState();

    const handleInputChange = (event) => {
        console.log('handleInputChange', event.target.value);
    }

    const handleFileChange = (event) => {
        console.log('handleFileChange', event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit');
    }

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
                            : 'https://via.placeholder.com/200?text=Choose+image'
                    }
                    alt="preview"
                    width="200"
                />
                <button
                    type="submit"
                    disabled={file && inputs.title.length > 3 ? false : true}
                >
                    Upload
                </button>
            </form>
        </>
    );
};

export default Upload;