'use client'
import { FC, useState } from "react" 
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";

const Nav:FC = () => {
  const [showSearch,setShowSearch] = useState<boolean>(false)
  return (
    <>
    <nav className="navbar">
            <h3 className="title">Insight<span id="ink">Ink</span></h3>
            <div className="navSection">
                <div className="menu1">
                <Link className="active" href='/'>
                    Home
                </Link>
                <Link href='/'>
                    Blog
                </Link>
                <Link href='/'>
                    Contact
                </Link>
                </div>
                <div className="GetStartedAndSearch">
                <SearchIcon className={`icon ${showSearch?'hidden':'flex'}`} onClick={()=>setShowSearch((prev)=>!prev)}/>
                <button className="themeButton" id="getStartedbtn">Get Started</button>
                <button className="themeButton">Login</button>
                <button className="themeButton" id='signUpbtn'>Sign Up</button>
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