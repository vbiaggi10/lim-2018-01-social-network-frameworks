import React, { Component } from "react";
import imgProfile from "../../../../../img/user.png";

class ProfileCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: ''
    }
  }
  componentDidMount() {
    if(localStorage.getItem("user") === 'null'){
      this.setState({user: localStorage.getItem("userEmail")})    
    }else{
      this.setState({user: localStorage.getItem("user")})    
    }
  }
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={imgProfile} alt="url" />
        <div className="card-body">
          <h5 className="card-title">{this.state.user}</h5>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
