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
        setStatus(state: ICategoryState, action: PayloadAction<Status>) {
            state.status = action.payload
        },
        resetStatus(state) {
            state.status = Status.Loading
        },
        setCategory(state:ICategoryState, action: PayloadAction<ICategory[]>) {
            state.category = action.payload
        },
        addCategory(state:ICategoryState,action:PayloadAction<ICategory>){
            state.category.push(action.payload)
        },
       deleteCategories(state:ICategoryState, action:PayloadAction<string>) {
            const index = state.category.findIndex((category) => category.id == action.payload)
            if(index !== -1){
                state.category.splice(index,1)
            }
        }
    }
})

export const { setStatus,resetStatus, setCategory,addCategory,deleteCategories } = categorySlice.actions
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
                dispatch(resetStatus())
            }else{
                dispatch(setStatus(Status.Error))
            }

        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.Error))
        }
    }
}

export function createCategory(token: string, data: { categoryName: string, categoryDescription: string }) {
    return async function createCategoryThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post('/institute/category', data, {
                headers: {
                    Authorization: `${token}`
                }
            })
            console.log(response)
            if (response.status === 201) {
                dispatch(setStatus(Status.Success))
                dispatch(addCategory(response.data.data))
            }else{
                dispatch(setStatus(Status.Error))
            }

        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.Error))
        }
    }
}


export function deleteCategory(token:string,id:string) {
    return async function deleteCategoryThunk(dispatch: AppDispatch) {
        try {
            const response = await API.delete('/institute/category/'+id, {
                headers: {
                    Authorization: `${token}`
                }
            })
            console.log(response)
            if (response.status === 200) {
                dispatch(setStatus(Status.Success))
                dispatch(deleteCategories(id))
            }else{
                dispatch(setStatus(Status.Error))
            }

        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.Error))
        }
    }
}