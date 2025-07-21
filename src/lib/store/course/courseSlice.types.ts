import { Status } from "../global/types";

export interface ICourse{
    courseId: string,
    courseName:string,
    coursePrice:string,
    courseDuration:string,
    courseDescription:string,
    courseLevel:string,
    courseThumbnail:string,
    categoryName:string,
    categoryDescription:string,
    createdAt:string,
    updatedAt:string
} 


export interface ICourseState{
    courses:ICourse[],
    status:Status
}