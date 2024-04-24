import { Link } from "react-router-dom";
import { useUser } from "../hooks/APIHooks";
import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import UserData from "../components/UserData";

export const Profile = () => {
    const { setUser } = useUserContext();
    const { getUserByToken } = useUser();

    useEffect(() => {
        const getUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const userData = await getUserByToken(token);
                setUser(userData.user);
            } catch (e) {
                console.error(e.message);
            }
        };
        getUser();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold">Tämä on minun profiilisivu</h2>
            <p>
                <Link to='/'>Takaisin etusivulle</Link>
            </p>
            <div>
                <UserData />
            </div>
        </div>
    );
}
