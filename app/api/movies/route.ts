import { NextRequest } from "next/server";

export const GET=async(req: NextRequest)=>{
    const data:any = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=57f6dc8dd3096ab5fbb379280349c183&page=1',{
        method:'GET',
        headers:{
            'Content-type':'application/json'
        }
    })
    console.log(data)
}