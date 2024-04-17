import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <h2 className="text-xl">Tämä on minun profiilisivu</h2>

            <p>
                <Link to='/'>Takaisin etusivulle</Link>
            </p>
        </div>
    );
}

export default Profile;