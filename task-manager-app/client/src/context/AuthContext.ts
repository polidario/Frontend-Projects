import { createContext } from 'react';
import { IAuthContext, IUser } from '../hooks/Types';

export const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: (user: IUser) => { }
});

export default AuthContext;