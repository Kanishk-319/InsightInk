'use client'
import {useState,useEffect,useContext } from "react" 
import {useSession} from 'next-auth/react'
import SearchIcon from '@mui/icons-material/Search';
import {LiteralUnion,ClientSafeProvider, signIn,getProviders,signOut } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import OverlayContext from "@Helpers/OverlayContext";
import {motion as m} from 'framer-motion'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Image from "next/image";
const Nav:React.FC = () => {
  const {isOverlay, setIsOverlay} = useContext(OverlayContext)
  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null)
  const [authType,setAuthType] = useState<string>('Sign up')
  const {data:session} = useSession()
  const [showSearch,setShowSearch] = useState<boolean>(false)
  const [isToggleDropdown, setIsToggleDropdown]=useState<boolean>(false)
  const [activeState,setActiveState] = useState<string>('Home')
  const funcToSetActive =(value:string):void=>{
        setActiveState(value)
  }
  useEffect(()=>{
    const setUpProviders = async()=>{
      const res = await getProviders()
      setProviders(res)
    }
    setUpProviders()
  },[])
  return (
    <>
    <nav className="navbar items-normal">
            <Link href='/'> <h3 className="title">Insight<span id="ink">Ink</span></h3></Link>
            <div className="navSection">
                <div className="menu1">
                <Link className={`${activeState=='Home'?'active':undefined}`} href='/' onClick={()=>funcToSetActive('Home')}>
                    Home
                </Link>
                <Link className={`${activeState=='Blog'?'active':undefined}`} href='/' onClick={()=>funcToSetActive('Blog')}>
                    Blog
                </Link>
                <Link className={`${activeState=='Write'?'active':undefined}`} href='/' onClick={()=>funcToSetActive('Write')}>
                    Write
                </Link>
                <Link className={`${activeState=='Contact'?'active':undefined}`} href='/' onClick={()=>funcToSetActive('Contact')}>
                    Contact
                </Link>
                </div>
                <div className="GetStartedAndSearch">
                <SearchIcon className={`icon ${showSearch?'hidden':'flex'}`} onClick={()=>setShowSearch((prev)=>!prev)}/>
              {session?.user ?  (
                <div className="profileMenuContainer">
                <div className="avatarAndNameContainer" onClick={()=>setIsToggleDropdown((prev)=>!prev)}> 
                <Image
                className="avatarImage"
                alt="avatarImage"
                src={session?.user.image as string}
                width={37}
                height={37}
                />
                <p>{session?.user.name}</p>
              
                </div>
                {isToggleDropdown && (
            <div className="dropdown">
              <Link
              className='dropdown_link'
              href='/'
              onClick={()=>setIsToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
              className='dropdown_link '
              href='/'
              onClick={()=>setIsToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <button
              type='button'
              onClick={()=>{
                setIsToggleDropdown(false)
              signOut()
            }}
              className='dropdown_link'
              >
                Sign Out
              </button>
            </div>
          )}
          
                </div>
              ):
               (
                <button className="themeButton" id="getStartedbtn" onClick={()=>setIsOverlay(true)}>Get Started</button> 
              )
              }
            </div>
            </div>
    </nav>
    <div  className={`searchAndCross ${showSearch?'flex':'hidden'}`}>
    <input type="text" placeholder="..." className={`searchInput ${showSearch?'flex':'hidden'}`}/>
    <CloseIcon className={`icon ${showSearch?'flex':'hidden'}`} id='cross' onClick={()=>setShowSearch((prev)=>!prev)}/>
    </div>
    {isOverlay && 
       <m.div initial={{scale:0}} animate={{scale:1}} className="popUpOverlay">
          <CloseIcon className="self-end cursor-pointer" onClick={()=>setIsOverlay(false)}/>
          <h3 className="loginHeading">Let's Get Started</h3>
          <div className="providersContainer">
            {providers && Object.values(providers).map((provider, index)=>{
              return(
                <button onClick={()=>signIn(provider.id)} key={index} className="signInButton">{provider.name=='Google'? <EmailIcon/>:provider.name == 'GitHub' ? <GitHubIcon/>:<AlternateEmailIcon/>} {authType} With {provider.name}</button>
              )
            })}
          </div>

          <div className="alreadyContainer">
            <p>Already have an account? <span onClick={()=>authType=='Sign up'? setAuthType('Sign in'): setAuthType('Sign up')}  className="font-helveticaRounded text-projectThemeColor cursor-pointer">{authType=='Sign up'?'Sign in':'Sign up'}</span></p>
          </div>
       </m.div>
        

    }
    </>
  )
}

export default Nav