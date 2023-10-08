
import Image from "next/image"
const TrendingFeed = () => {
  return (
    <div className="flex flex-col gap-1 leading-tighter">
    <div className="avatarAndTitle">
            <Image
                className="avatarImg"
                id="trendingAvatarImg"
                alt="avatar"
                src='/assets/icons/avatar.jpg'
                width={30}
                height={30}
            />
            <p className="feedNameContainer">Kanishk Singh Malik in <span className="fieldContainer">MERN Stack Programming</span></p>
        </div>
        <h3 className="feedTitle pl-3">5 Things You Must Know About React</h3>
</div>
  )
}

export default TrendingFeed