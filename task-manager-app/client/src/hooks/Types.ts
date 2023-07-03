export interface IUser {
    id: string,
    username: string,
    authToken: string,
}

export interface IAuthContext {
    user: IUser,
    setUser: (user: IUser) => void,
}

