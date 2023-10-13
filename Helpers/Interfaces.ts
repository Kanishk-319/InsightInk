export interface IMenu{
    name:string,
    destination:string 
}
export interface IContext{
    isOverlay:boolean,
    setIsOverlay: (prev:boolean)=>void
}