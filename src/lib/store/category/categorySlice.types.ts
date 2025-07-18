import { Status } from "../global/types";

export interface ICategory{
    id:string,
    categoryName:string,
    categoryDescription:string,
    createdAt:string,
    updatedAt:string,


}


export interface ICategoryState{
    category:ICategory[],
    status:Status
}