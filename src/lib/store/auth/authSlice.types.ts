import { Status } from "../global/types"

export interface IUserData{
    email: string,
    password: string
}

export interface IInitialData{
    user :IUserData,
    status:Status
}