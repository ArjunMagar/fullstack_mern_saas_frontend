import { Status } from "../global/types"

export interface IUser{
    username:string | null,
    email: string | null,
}

export interface IAuthState{
    user :IUser,
    token:string,
    status:Status
}