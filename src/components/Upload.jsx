const Upload = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Tiedostoa lähetetään');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" name="tiedosto" />
                <button type="submit">Upload file</button>
            </form>
        </>
    );
}

export default Upload;