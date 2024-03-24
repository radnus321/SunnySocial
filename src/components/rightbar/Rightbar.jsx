import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../Online/Online"
export default function Rightbar({profile}){

  const HomeRightBar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Sundar Matu</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.filter((u) => u.online === true).map((u) =>(
            <Online key={u.id} user={u} />
          ))}
        </ul>      
      </>
    )
  }

  const ProfileRightBar = () => {
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">City: </div>
          <div className="rightbarInfoValue">Pilani</div>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">From: </div>
          <div className="rightbarInfoValue">Rajahmundry</div>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">jessie carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">jessie carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">jessie carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">jessie carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">jessie carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">jessie carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">jessie carter</span>
        </div>
      </div>
      </>
    )
  }

  return(
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}