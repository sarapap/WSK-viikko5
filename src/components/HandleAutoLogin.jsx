import { useUserContext } from '../contexts/UserContext';
import { useEffect } from 'react';

const HandleAutoLogin = () => {
    const { handleAutoLogin } = useUserContext();

    useEffect(() => {
        handleAutoLogin();
    }, []);

    return null;
};


export default HandleAutoLogin; 
