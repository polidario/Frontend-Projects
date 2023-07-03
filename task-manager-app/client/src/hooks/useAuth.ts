import { IUser } from "./Types";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useAuth = () => {
    const { user, addUser, removeUser } = useUser();
    const { getItem } = useLocalStorage();

    useEffect(() => {
        const user = getItem('user');
        if (user) {
            addUser(JSON.parse(user));
        }
    }, []);

    // Login function that takes a user object and adds it to local storage
    const login = (user: IUser) => {
        addUser(user);
    }

    const logout = () => {
        removeUser();
    }

    return { user, login, logout };
}