import Lottie from "lottie-react"
import animationData from '../public/assets/lottie/blog.json'
import Image from "next/image"
const Header:React.FC = () => {
  return (
    <div className='Header'>
        <div className="sloganAndButtonContainer">
        <div className='sloganContainer'>
           <p className='themeText'> Weaving Wisdom</p>
           <p>The Art of Insightful</p>
            <p className='individualExpressionWord'>Expression</p>
        </div>
        <div className="descContainer">
            <p>Ink the Canvas of Imagination through the</p>
            <p>Written Word</p>
        </div>
        <div className="buttonContainer">
        <button className="themeButton">Buy Now</button>
        <button className="themeButton exploreBtn">Explore Blogs</button>
        </div>
        </div>
        <Lottie className="mainAnimation" animationData={animationData}/>
        {/* <Image 
        alt='secondSvg' 
        className="secondSvg" 
        src='/assets/lottie/secondSvg.svg'
        width={300}
        height={300}
        priority
        />
         <Image 
        alt='thirdSvg' 
        className="thirdSvg" 
        src='/assets/lottie/thirdSvg.svg'
        width={300}
        height={300}
        priority
        /> */}
        
    </div>
  )
}

export default Header