
import Blog from "./Blog"
import Nav2 from "./Nav2"
import TrendingFeed from "./TrendingFeed"
import Image from "next/image"
import { IMenu } from "@Helpers/Interfaces"

const ConnectButton:React.FC<IMenu> =({name, destination})=>{
  return(
    <div className="connectIconContainer">
    <Image
    className="connectIcons"
    alt={name}
    src={destination}
    width={30}
    height={30}
    />
    <p>Connect to {name}</p>
    </div>
  )
}
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
                <ConnectButton name="GitHub" destination="/assets/icons/github.png"/>
                <ConnectButton name="Twitter" destination="/assets/icons/twitter.png"/>
                <ConnectButton name="LinkedIn" destination="/assets/icons/linkedIn.png"/>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Feed