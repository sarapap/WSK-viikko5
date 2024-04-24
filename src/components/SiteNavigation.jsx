import { Link } from "react-router-dom";
import Button from "./UI/Button";
import { useUserContext } from "../contexts/UserContext";

const SiteNavigation = () => {
    const { user, handleLogout } = useUserContext();
    return (
        <nav>
            <Link to="/">Etusivu 🏠</Link>
            {user !== undefined && <>
                <Link to="/profile">Profiili 🤣</Link>
                <Link to="/upload">Upload</Link>
                <Button text="Logout" handleClick={handleLogout} />
            </>}
            {!user && <Link to="/login">Login</Link>}
        </nav>
    );
}

export default SiteNavigation;