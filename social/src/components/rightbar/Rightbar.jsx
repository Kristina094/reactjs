import "./rightbar.css"
import { Users } from "../../dummyData"



export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> hav a birthday today
            </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friende</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
          <online key={u.id} user={u}/>))}
        </ul>
      </div>
    </div>
  )
}
