import { AuthContext } from '../context/AuthContext';
import { IUser } from './Types';
import { useLocalStorage } from './useLocalStorage';
import { useContext } from 'react';

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { setItem, removeItem } = useLocalStorage();

    const addUser = (user: IUser) => {
        setItem('user', JSON.stringify(user));
        setUser(user);
    }

    const removeUser = () => {
        removeItem('user');
        setUser(null);
    }

    return { user, addUser, removeUser };
}

export default useUser;