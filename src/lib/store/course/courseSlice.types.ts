import { Status } from "../global/types";

export interface Icourse {
    courseName: string,
    coursePrice: string,
    courseDuration: string,
    courseDescription: string,
    courseLevel: string,
    courseImage: File | string,
    categoryId: string,
}
export interface ICourse extends Icourse {
    courseId: string,
    courseThumbnail: string,
    categoryName: string,
    categoryDescription: string,
    createdAt: string,
    updatedAt: string
}


export interface ICourseState {
    courses: ICourse[],
    status: Status
}