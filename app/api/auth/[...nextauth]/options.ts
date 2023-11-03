import type {NextAuthOptions} from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import User from '@models/user';
import { connectToDB } from '@Helpers/database';

export const options:NextAuthOptions={
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
          }),
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
          })
    ],
    callbacks:{
      async session({session}){
        const sessionUser = await User.findOne({
          email: session.user.email
        })
        session.user.id = sessionUser._id,toString()
        return session
      },
      async signIn ({profile}){
        try{
          await connectToDB()
          const userExists = await User.findOne({
            email:profile?.email
          })

          if(!userExists){
            await User.create({
              email:profile?.email,
              username:profile?.name?.replace(" ","").toLowerCase()
            })
          }
          return true
        }catch(error){
          console.log(error)
          return false
        }
      }
    }
}