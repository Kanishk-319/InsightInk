import { connectToDB } from "@Helpers/database";
import Blog from "@models/blog";
import { NextApiRequest } from "next";

export const dynamic = 'force-dynamic';
export const GET = async (req:NextApiRequest)=>{
    try{
        await connectToDB()
        const blogs = await Blog.find({}).populate('creator') 
        return new Response(JSON.stringify(blogs), {status: 200})

    }catch(error){
        return new Response("Failed to fetch all the blogs", {status:500})
    }
}