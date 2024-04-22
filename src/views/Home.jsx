import { useState } from "react";
import MediaRow from "../components/MediaRow";
import fetchData from "../utils/fetchData";
import { useEffect } from "react";

const Home = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [mediaArray, setMediaArray] = useState([]);

    console.log(selectedItem);

    const getMedia = async () => {
        try {
            const mediaResult = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');
            setMediaArray(mediaResult);
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMedia();
    }, []);

    console.log(mediaArray);
};

return (
    <>
        <h2>My Media</h2>
        <table>
            <thead>
                <tr>
                    <th>Thumbnail</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Created</th>
                    <th>Size</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {mediaArray.map((item) => (
                    <MediaRow key={item.media_id}
                        item={item}
                        setSelectedItem={setSelectedItem} />
                ))}
            </tbody>
        </table>
    </>
);

export default Home;

