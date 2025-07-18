import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../global/types";
import { ICategory, ICategoryState } from "./categorySlice.types"
import { AppDispatch } from "../store";
import API from "@/lib/http";

const initialState: ICategoryState = {
    category: [],
    status: Status.Loading
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setStatus(state:ICategoryState, action: PayloadAction<Status>) {
            state.status = action.payload
        },
        setCategory(state,action:PayloadAction<ICategory[]>){
            state.category=action.payload
        }
    }
})

const { setStatus,setCategory } = categorySlice.actions
export default categorySlice.reducer

export function getCategory(token: string) {
    return async function getCategoryThunk(dispatch: AppDispatch) {
        try {
            const response = await API.get('/institute/category', {
                headers: {
                    Authorization: `${token}`
                }
            })
            // console.log(response)
            if (response.status === 200) {
                dispatch(setStatus(Status.Success))
                dispatch(setCategory(response.data.data))
            }

        } catch (error) {
            console.log(error)
        }
    }
}

