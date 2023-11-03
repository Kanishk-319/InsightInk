import { connectToDB } from "@Helpers/database";
import Blog from "@models/blog";
import { NextApiRequest } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const GET = async (req:NextApiRequest, {params}:Params)=>{
    try{
        await connectToDB()
        const blogs = await Blog.find({
            creator:params.id
        }).populate('creator')
        return new Response(JSON.stringify(blogs), {status: 200})

    }catch(error){
        return new Response("Failed to fetch all the blogs", {status:500})
    }
}