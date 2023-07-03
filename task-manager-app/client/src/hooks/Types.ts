export interface IUser {
    id: string,
    username: string,
    authToken: string,
}

export interface IAuthContenxt {
    user: IUser,
    setUser: (user: IUser) => void,

}

