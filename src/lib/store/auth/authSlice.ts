import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import API from "@/lib/http";
import { IAuthState, IUser } from "./authSlice.types";
import { Status } from "../global/types";
import { IRegisterData } from "@/app/auth/register/register.types";
import { Ilogin } from "@/app/auth/login/login.types";

const initialState: IAuthState = {
    user: {
        username: "",
        email: ""  ,
        role:""      
    },
    token:"",
    status: Status.Loading,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setStatus(state: IAuthState, action: PayloadAction<Status>) {
            state.status = action.payload;
        },
        setToken(state: IAuthState, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        setUser(state:IAuthState,action:PayloadAction<IUser>){
            state.user= action.payload
        }
    },
});

export const { setUser,setStatus, setToken } = authSlice.actions;
export default authSlice.reducer;

export function registerUser(data: IRegisterData) {
    return async function registerUserThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post("/auth/register", data);

            if (response.status === 201) {
                dispatch(setStatus(Status.Success));
            } else {
                dispatch(setStatus(Status.Error));
            }
        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.Error));
        }
    };
}

export function loginUser(data: Ilogin) {
    return async function loginUserThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post("/auth/login", data);
            console.log(response, "userDAta");
            if (response.status === 200) {
                dispatch(setStatus(Status.Success));
                if (response.data.token) {
                    dispatch(setToken(response.data.token));
                    dispatch(setUser(response.data.data))
                    localStorage.setItem("token", response.data.token);
                } else {
                    dispatch(setStatus(Status.Error));
                }
            } else {
                dispatch(setStatus(Status.Error));
            }
        } catch (error) {
            console.log(error);
            dispatch(setStatus(Status.Error));
        }
    };
}

