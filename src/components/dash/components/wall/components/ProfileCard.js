import React, { Component } from "react";
import imgProfile from "../../../../../img/user.png";

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  componentDidMount() {
    if (localStorage.getItem("user") === "null") {
      this.setState({ user: localStorage.getItem("userEmail") });
    } else {
      this.setState({ user: localStorage.getItem("user") });
    }
  }
  render() {
    return (
      <div className="col-sm-12">
        <div className="card profile-card">
          <div className="col-sm-3">
          <center>
            <img
              className="card-img-top imgProfile"
              src={imgProfile}
              alt="url"
            />
            </center>
          </div>
          <div className="card-body col-sm-9">
            <h5 className="card-title">{this.state.user}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
