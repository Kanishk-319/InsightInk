'use client'
import {useState,useEffect } from "react" 
import {useSession} from 'next-auth/react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";

const Nav:React.FC = () => {
  const {data:session} = useSession()
  const [showSearch,setShowSearch] = useState<boolean>(false)
  const [activeState,setActiveState] = useState<string>('Home')
  const funcToSetActive =(value:string):void=>{
        setActiveState(value)
  }
  useEffect(()=>{
    console.log(session)
  },[session])
  return (
    <>
    <nav className="navbar items-normal">
            <h3 className="title">Insight<span id="ink">Ink</span></h3>
            <div className="navSection">
                <div className="menu1">
                <Link className={`${activeState=='Home'?'active':undefined}`} href='/' onClick={()=>funcToSetActive('Home')}>
                    Home
                </Link>
                <Link className={`${activeState=='Blog'?'active':undefined}`} href='/' onClick={()=>funcToSetActive('Blog')}>
                    Blog
                </Link>
                <Link className={`${activeState=='Contact'?'active':undefined}`} href='/' onClick={()=>funcToSetActive('Contact')}>
                    Contact
                </Link>
                </div>
                <div className="GetStartedAndSearch">
                <SearchIcon className={`icon ${showSearch?'hidden':'flex'}`} onClick={()=>setShowSearch((prev)=>!prev)}/>
                <button className="themeButton" id="getStartedbtn">Get Started</button>
                <Link href='/api/auth/signin'><button className="themeButton">Login</button></Link>
               <Link href='/api/auth/signout'><button className="themeButton" id='signUpbtn'>Sign Out</button></Link> 
            </div>
            </div>
    </nav>
    <div  className={`searchAndCross ${showSearch?'flex':'hidden'}`}>
    <input type="text" placeholder="..." className={`searchInput ${showSearch?'flex':'hidden'}`}/>
    <CloseIcon className={`icon ${showSearch?'flex':'hidden'}`} id='cross' onClick={()=>setShowSearch((prev)=>!prev)}/>
    </div>
    
    </>
  )
}

export default Nav