import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../global/types";
import API from "@/lib/http";
import { IinstituteState } from "./instituteSlice.types";
import { Iinstitute } from "@/app/institute/institute.types";
import { AppDispatch } from "../store";

const initialState: IinstituteState = {

    status: Status.Loading,
};

const instituteSlice = createSlice({
    name: "institute",
    initialState,
    reducers: {
        setStatus(state: IinstituteState, action: PayloadAction<Status>) {
            state.status = action.payload;
        },

    },
});

export const { setStatus } = instituteSlice.actions;
export default instituteSlice.reducer;

export function createInstitute(data: Iinstitute, token: string) {
    return async function createInstituteThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post("/institute", data, {
                headers: {
                    Authorization: `${token}`,
                },
            });
            if (response.status === 200) {
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