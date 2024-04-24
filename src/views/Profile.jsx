import { Link } from "react-router-dom";
import { useUser } from "../hooks/APIHooks";
import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";

export const Profile = () => {
    const { user, setUser } = useUserContext(null);
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
                {user && (
                    <>
                        <p>Käyttäjätunnus: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Luotu: {new Date(user.created_at).toLocaleString('fi-FI')}</p>
                    </>
                )}
            </div>
        </div>
    );
}
