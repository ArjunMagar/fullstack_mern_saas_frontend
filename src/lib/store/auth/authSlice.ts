import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch } from "../store";
import API from "@/http";
import { IInitialData } from "./authSlice.types";
import { Status } from "../global/types";
import { IRegisterData } from "@/app/auth/register/register.types";

const data: IInitialData = {
    user: {
        email: "",
        password: ""
    },
    status: Status.Loading
}


const authSlice = createSlice({
    name: "auth",
    initialState: data,
    reducers: {
        setStatus(state: IInitialData, action: PayloadAction<Status>) {
            state.status = action.payload
        },

    }
})

const { setStatus } = authSlice.actions
export default authSlice.reducer

export function registerUser(data: IRegisterData) {
    return async function registerUserThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post("/auth/register", data)
            
            if (response.status === 201) {
                dispatch(setStatus(Status.Success))

            } else {
                dispatch(setStatus(Status.Error))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.Error))

        }
    }
}