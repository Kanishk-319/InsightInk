'use client'
import Link from "next/link";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import Header from "@components/Header";
import Feed from "@components/Feed";

const Home:React.FC = () => {
  return (
    <>
      <div className="w-full  flex flex-col">
        <Header/>
        <Feed/>
      </div>
      <nav className="navbar2">
        <Link href='/'>
          <HomeRoundedIcon />
        </Link>
        <Link href='/'>
          <EditRoundedIcon />
        </Link>
        <Link href='/'>
          <ContactSupportRoundedIcon />
        </Link>
      </nav>
    </>

  )
}

export default Home