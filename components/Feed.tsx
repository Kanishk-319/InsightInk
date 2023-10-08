
import Blog from "./Blog"
import Nav2 from "./Nav2"
import TrendingFeed from "./TrendingFeed"
import Image from "next/image"

// const ConnectButton:React.FC =(src:string, name:string)=>{
//   return(
//     <div className="connectIconContainer">
//     <Image
//     className="connectIcons"
//     alt="github"
//     src='/assets/icons/github.png'
//     width={30}
//     height={30}
//     />
//     <p>Connect to GitHub</p>
//     </div>
//   )
// }
const Feed:React.FC = () => {
  return (
    <div className="Feed">
        <div className="mainFeedSection">
           <Nav2/>
           <div className="blogSection">
                <Blog/>
                <Blog/>
                <Blog/>
                <Blog/>
           </div>
        </div>
        <div className="trendingFeedSection">
            <h3>Trending Blogs</h3>
            <div className="flex flex-col gap-10">
            <TrendingFeed/>
            <TrendingFeed/>
            <TrendingFeed/>
            <div className="connectContainer">
                <h3 className="followText">Follow me on other platforms</h3>
                <div className="connectIconContainer">
    <Image
    className="connectIcons"
    alt="github"
    src='/assets/icons/github.png'
    width={30}
    height={30}
    />
    <p>Connect to GitHub</p>
    </div>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Feed