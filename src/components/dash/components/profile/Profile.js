import React, { Component } from "react";
import ProfileCard from "../wall/components/ProfileCard";
import ContentPost from "./components/ContentProfile";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="page-contents">
          <div className="profile">
            <h2>Profile</h2>
          </div>
          <div className="containerM">
            <ProfileCard />
            <ContentPost />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
