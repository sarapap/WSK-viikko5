import { useUserContext } from "../contexts/UserContext";

const UserData = () => {
    const { user } = useUserContext();

    if (!user) {
        return null;
    }

    return (
        <>
            <p>Käyttäjätunnus: {user.username} </p>
            <p>Email: {user.email} </p>
            <p>Luotu: {new Date(user.created_at).toLocaleString('fi-FI')}</p>
        </>
    )
}

export default UserData;