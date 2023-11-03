import { Schema } from "mongoose";

export interface IMenu{
    name:string,
    destination:string 
}
export interface IContext{
    isOverlay:boolean,
    setIsOverlay: (prev:boolean)=>void
}
export interface IProfileProps{
    handleClick():void
}
export interface IUser {
    username: string;
    email: string;
    image?: string;
  }
export interface IBlog {
    creator: Schema.Types.ObjectId,
    content: string,
    title:string,
    category:string
}