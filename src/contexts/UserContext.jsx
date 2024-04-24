import { createContext, useContext, useState } from "react";
import { useAuthentication } from "../hooks/APIHooks";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/APIHooks";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    const { login } = useAuthentication();
    const navigate = useNavigate();
    const { getUserByToken } = useUser();

    console.log("user in UserProvider", user)

    const handleLogin = async (credentials) => {
        console.log("credentials", credentials);
        console.log({ credentials });
        try {
            const userData = await login(credentials);
            console.log('userData', userData);
            localStorage.setItem('token', userData.token);
            setUser(userData.user);
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    const handleLogout = () => {
        try {
            localStorage.removeItem('token');
            setUser(undefined);
            navigate('/');
        } catch (e) {
            console.log(e.message);
        }
    };

    const handleAutoLogin = async () => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                const userData = await getUserByToken(token);
                setUser(userData.user);
                navigate('/');
            }
        } catch (e) {
            console.error(e.message);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, handleLogin, handleLogout, handleAutoLogin }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext)