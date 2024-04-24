import { createContext, useContext, useState } from 'react';
import { useAuthentication } from '../hooks/APIHooks';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    const { login } = useAuthentication();
    const { navigate } = useNavigate();

    console.log('UserProvider', user);

    const handleLogin = async (credentials) => {
        try {
            const userData = await login(credentials);
            console.log('userData', userData);
            localStorage.setItem('token', userData.token);
            navigate('/');
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, handleLogin }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);