import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../global/types";
import { ICourse, ICourseState } from "./courseSlice.types";
import API from "@/lib/http";
import { AppDispatch } from "../store";

const initialState: ICourseState = {
    courses: [],
    status: Status.Loading
}

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setStatus(state:ICourseState, action:PayloadAction<Status>) {
            state.status = action.payload
        },
        setCourse(state:ICourseState, action:PayloadAction<ICourse[]>) {
            state.courses = action.payload
        }


    }
})


export const { setStatus, setCourse } = courseSlice.actions
export default courseSlice.reducer


export function fetchCourses(token: string) {
    return async function fetchCoursesThunk(dispatch: AppDispatch) {
        try {
            const response = await API.get('/institute/course', {
                headers: {
                    Authorization: `${token}`
                }
            })
            if(response.status === 200){
                dispatch(setStatus(Status.Success))
                dispatch(setCourse(response.data.data))
            }else{
                dispatch(setStatus(Status.Error))
            }
          
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.Error))
        }
    }
}