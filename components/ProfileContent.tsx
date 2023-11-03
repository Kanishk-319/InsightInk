'use client'
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useSession } from "next-auth/react"
import LogoutIcon from '@mui/icons-material/Logout';


const ProfileContent: React.FC = () => {
  const { push } = useRouter()
  const { data: session } = useSession()
  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }
  return (
    <>
      {session?.user && (
        <div className="profilePageContainer">
          <div className="profileContainer">
            <div className="btnAndNameContainer">
              <div className="profileAvContainer">
                <Image
                  className="profileAvatarImage"
                  alt="avatarImage"
                  src={session?.user.image as string}
                  width={35}
                  height={35}
                />
                <p className="font-extralight font-helvetica lg:text-[2.5rem] md:text-[2em] sm:text-[1.7em] text-[1.2em] md:w-full sm:w-[80%] w-[70%] flex-wrap">{session?.user.name}</p>
              </div>
              <LogoutIcon className="cursor-pointer" onClick={handleSignOut} id='signOutbtn' />
            </div>
            <nav className="profileNav">
            <li className="profileNavListItems">Home</li>
            <li className="profileNavListItems">About</li>
          </nav>
          </div>
          
        </div>
      )}
    </>
  )
}

export default ProfileContent