import React, { Component } from "react";
import ProfileCard from "./components/ProfileCard";
import ContentPost from "./components/ContentPost";
import "./wall.css";

class ContentMuro extends Component {
  render() {
    return (
      <div className="page-contents">
        <div className="profile">
          <h2>Wall</h2>
        </div>
        <div className="container containerM">
          <ProfileCard />
          <ContentPost />
        </div>
      </div>
    );
  }
}

export default ContentMuro;
