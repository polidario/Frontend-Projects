import { createContext } from 'react';
import { IAuthContenxt, IUser } from '../hooks/Types';

export const AuthContext = createContext(<IAuthContenxt>({
    user: null,
    setUser: (user: IUser) => { }
}));

export default AuthContext;