
import Blog from "./Blog"
import Nav2 from "./Nav2"
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
    </div>
  )
}

export default Feed