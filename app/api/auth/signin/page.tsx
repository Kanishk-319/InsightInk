'use client'
import { getProviders, signIn } from "next-auth/react"

const page = async() => {
    const res = await getProviders()
    console.log(Object.values(res))
        
  return (
    <div>
        {Object.values(res).map((provider,index)=>{
            return(
                <button key={index} >{provider.name}</button>
            )
        })}
    </div>
  )
}

export default page