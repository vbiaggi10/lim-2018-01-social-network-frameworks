import React, { Component } from "react";

class PublishPost extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.uid = props.uid;
    this.state ={
      textInput : props.content
    }
    this.user = props.user;
    this.userName = props.userName;
    this.userEmail = props.userEmail;
    this.privacy = props.privacy;
<<<<<<< HEAD
    this.handleInput = this.handleInput.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleInput(e){
    
    this.setState({
      textInput:e.target.value
    })
  }

  handleChange(){
    
    this.props.changePost(this.state.textInput)
=======
    this.imageUrl = props.imageUrl;
    this.timestamp = props.timestamp;
>>>>>>> 494294b2e9c687110add71a3fa79b45223de8d1b
  }

  handleRemove(id) {
    this.props.removePost(id);
  }

<<<<<<< HEAD
  
=======
  handleUpdate(e) {
    const postData = {
      uid: this.uid,
      body: this.body,
      userName: this.userName,
      userEmail: this.userEmail,
      privacy: e.target.value,
      imageUrl: this.imageUrl,
      timestamp: this.timestamp
    };
    const updatesPost = {};

    updatesPost["/posts/" + this.id] = postData;

    return window.firebase
      .database()
      .ref()
      .update(updatesPost);
  }

>>>>>>> 494294b2e9c687110add71a3fa79b45223de8d1b
  render() {
    console.log(this.timestamp)
    let isPrivate, isPublic;
    if (this.privacy === "private") isPrivate = true;
    else isPrivate = false;
    if (this.privacy === "public") isPublic = true;
    else isPublic = false;
    var timestamp = this.timestamp;
    console.log(new Date(timestamp * 1000))

    return (
      <div id="posts">
        <div id="loadedPost">
          <div className="card mt-3 mb-3">
            {this.uid === localStorage.getItem("userID") ? (
              <select
                className="custom-select card-header"
                id="inputGroupSelect01"
                onChange={this.handleUpdate.bind(this)}
              >
                {/* {this.privacy === 'public' ? document.getElementById('public').setAttribute('selected','selected') : document.getElementById('private').setAttribute('selected','selected')} */}
                <option value="public" selected={isPublic}>
                  public
                </option>
                <option value="private" selected={isPrivate}>
                  private
                </option>
              </select>
            ) : (
              false
            )}
            <div className="card-body">
              <h5 className="card-title">{this.user}</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted">
                {this.user}
              </h6> */}
              <p className="card-text">{this.body}</p>
              <p className="card-text">
                <small className="text-muted">
                  Last updated {this.timestamp ? this.timestamp : false} minutes
                  ago
                </small>
              </p>
<<<<<<< HEAD
            <textarea
                name="texts"
                cols="30"
                rows="5"
                className="form-control"
                value={this.state.textInput}
                onChange={this.handleInput}
              />
              <a href="" onClick={() => this.handleRemove(this.id)} className="btn btn-primary">Delete</a>
              <a href="" onClick={() => this.handleChange}className="btn btn-primary">Edit</a>
=======
              {this.uid === localStorage.getItem("userID") ? (
                <a
                  href=""
                  onClick={() => this.handleRemove(this.id)}
                  className="btn btn-primary"
                >
                  Delete
                </a>
              ) : (
                false
              )}
>>>>>>> 494294b2e9c687110add71a3fa79b45223de8d1b
            </div>
            <img className="card-img-bottom" src={this.imageUrl} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default PublishPost;
