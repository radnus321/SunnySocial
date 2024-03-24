import "./post.css"
import { MoreVert } from "@mui/icons-material"
import {Users} from "../../dummyData"
import { useState } from "react";

export default function Post({post}) {
// LIKE BUTTON IMPLEMENTATION
  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);
  const likeFunction = () => {
    setLike(isLike ? like-1 : like+1);
    setIsLike(!isLike);
  }
// REST OF THE CODE
  let postUser = Users.find((y) => y.id === post.id);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
        <div className="postTopLeft">
          <img className="postProfileImg" src={postUser.profilePicture} alt="" />
          <span className="postUsername">{postUser.username}</span>
          <span className="postDate">{post.date}</span>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <img onClick={likeFunction} className="likeIcon" src="assets/like.png" alt="" />
          <img onClick={likeFunction} className="likeIcon" src="assets/heart.png" alt="" />
          <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
