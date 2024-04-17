import { Link } from "react-router-dom";

export const Profile = () => {
    return (
        <div>
            <h2>Tämä on minun profiilisivu</h2>

            <p>
                <Link to='/'>Takaisin etusivulle</Link>
            </p>
        </div>
    );
}