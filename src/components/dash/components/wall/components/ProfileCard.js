import React, { Component } from "react";
// import "./ProfileCard.css";
import imgProfile from "../../../../../img/user.png";
class ProfileCard extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={imgProfile} alt="url" />
        <div className="card-body">
          <h5 className="card-title">{localStorage.getItem("user")}</h5>
          {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
        {/* <div className="col-md-3">
        <div className="profile-card">
          <img src={imgProfile} alt="user" className="profile-photo" />
          <h5>
            <a href="" id="name" className="text-white">
              {localStorage.getItem("user")}
            </a>
          </h5>
        </div> 
      </div>*/}
      </div>
    );
  }
}

export default ProfileCard;
