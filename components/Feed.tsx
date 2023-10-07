import Link from "next/link"
import { useState } from "react"
import { menuItems } from "@Helpers/MenuItems"
import { IMenu } from "@Helpers/Interfaces"
const Feed:React.FC = () => {
   const [showActive,setShowActive]= useState<string>('For you')
   const handleClick = (name:string)=>{
    setShowActive(name)
   }
  return (
    <div className="Feed">
        <div className="mainFeedSection">
            <nav className="feedMenu no-scrollbar">
                {menuItems.map((item:IMenu, index:number)=>{
                    return(
                    <Link
                    className='menuItems'
                    id={item.name == showActive ? 'feedActive':null}
                    key={index}
                    onClick={()=>handleClick(item.name)}
                    href={item.destination}
                    >
                        {item.name}
                    </Link>
                    )
                })}
            </nav>
            
        </div>
    </div>
  )
}

export default Feed