import { FC } from "react"
import SearchIcon from '@mui/icons-material/Search';
import Link from "next/link";

const Nav:FC = () => {
  return (
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
                <SearchIcon className="icon"/>
                <button className="themeButton" id="getStartedbtn">Get Started</button>
                <button className="themeButton">Login</button>
                <button className="themeButton" id='signUpbtn'>Sign Up</button>
            </div>
            </div>
            
    </nav>
  )
}

export default Nav