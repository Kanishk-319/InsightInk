
import Image from "next/image"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Blog = () => {
    return (
        <div className="feedContainer">
            <div className="feedContent">
                <div className="avatarAndTitle">
                    <Image
                        className="avatarImg"
                        alt="avatar"
                        src='/assets/icons/avatar.jpg'
                        width={30}
                        height={30}
                    />
                    <p className="feedNameContainer"><span className="nameContainer">Kanishk Singh Malik</span> in <span className="fieldContainer">MERN Stack Programming</span></p>
                </div>
                <div className="feedMainContentContainer">
                    <h3 className="feedTitle">5 Things You Must Know Aboout React</h3>
                    <p className="blogPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aspernatur quas recusandae excepturi ullam perspiciatis modi reiciendis consequatur illum sint.</p>
                    <div className="dateAndSaveShareContainer">
                        <h3 className="feedNameContainer">Oct 23</h3>
                        <div className="saveAndShare">
                            <BookmarkBorderIcon className="saveAndShareIcons" style={{ 'color': 'gray' }} />
                            <MoreHorizIcon className="saveAndShareIcons" style={{ 'color': 'gray' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="blogImgContainer">
                <Image
                    className="blogImg"
                    alt='blogPic'
                    src='/assets/comp.jpg'
                    width={300}
                    height={300}
                />
            </div>

            <div>
            </div>
        </div>

    )
}

export default Blog