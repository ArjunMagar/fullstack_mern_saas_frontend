import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../global/types";
import { Icourse, ICourse, ICourseState } from "./courseSlice.types";
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
        },
        resetStatus(state:ICourseState){
            state.status = Status.Loading
        },
        addCourse(state:ICourseState,action:PayloadAction<ICourse>){
            state.courses.push(action.payload)
        }


    }
})


export const { setStatus, setCourse, resetStatus, addCourse} = courseSlice.actions
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

export function createCourses(token: string,data:Icourse) {
    return async function createCoursesThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post('/institute/course',data, {
                headers: {
                    Authorization: `${token}`,
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log(response,"chekc.........")
            if(response.status === 201){
                dispatch(setStatus(Status.Success))
                dispatch(addCourse(response.data.data))

            }else{
                dispatch(setStatus(Status.Error))
            }
          
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.Error))
        }
    }
}