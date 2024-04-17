import { Link } from "react-router-dom";
import { useState } from "react";

const Upload = () => {

    const [file, setFile] = useState(" ");
    const [name, setName] = useState(" ");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Tiedostoa lähetetään');

        console.log("file", file);
        console.log("name", name);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    name="tiedosto"
                    onChange={(event) =>
                        setFile(event.target.value)}
                /><br />
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(event) =>
                        setName(event.target.value)}
                />
                <button className='m-3 mt-0 p-3 rounded-lg text-stone-100'
                    type="submit">
                    Upload file</button>
            </form>

            <p>
                <Link to='/'>Back to Home</Link>
            </p>
        </>
    );
}

export default Upload;