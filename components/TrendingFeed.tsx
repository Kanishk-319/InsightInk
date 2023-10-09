
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
            <p className="FieldFeedNameContainer">Kanishk Singh Malik</p>
        </div>
        <h3 className="trendingFeedTitle pl-3">Arguing about facts doesn’t work — why Politics should be like Couples Therapy</h3>
</div>
  )
}

export default TrendingFeed