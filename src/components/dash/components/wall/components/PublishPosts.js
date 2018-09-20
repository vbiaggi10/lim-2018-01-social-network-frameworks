import React, { Component } from "react";

class PublishPost extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    this.id = props.id;
    this.uid = props.uid;
    this.user = props.user;
    this.userName = props.userName;
    this.userEmail = props.userEmail;
    this.privacy = props.privacy;
    this.imageUrl = props.imageUrl;
    this.timestamp = props.timestamp;
    this.state={
      textInput:props.content,
    }
  }




  handleInput(e){
    this.setState({
      textInput:e.target.value
    })
  }
  handleChange(){
    const postData = {
      uid: this.uid,
      body: this.state.textInput,
      userName: this.userName,
      userEmail: this.userEmail,
      privacy: this.privacy,
      // imageUrl: this.imageUrl,
      timestamp: this.timestamp
    };
    const updatesPost = {};

    updatesPost["/posts/" + this.id] = postData;

    return window.firebase
      .database()
      .ref()
      .update(updatesPost);
  }
  handleRemove(id) {
    this.props.removePost(id);
  }

  handleUpdate(e) {
    const postData = {
      uid: this.uid,
      body: this.state.textInput,
      userName: this.userName,
      userEmail: this.userEmail,
      privacy: e.target.value,
      // imageUrl: this.imageUrl,
      timestamp: this.timestamp
    };
    const updatesPost = {};

    updatesPost["/posts/" + this.id] = postData;

    return window.firebase
      .database()
      .ref()
      .update(updatesPost);
  }

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
                <textarea
                  name="texts"
                  cols="30"
                  rows="5"
                  className="form-control"
                  value={this.state.textInput}
                  onChange={this.handleInput.bind(this)}
                />
              <p className="card-text">
                <small className="text-muted">
                  Last updated {this.timestamp ? this.timestamp : false} minutes
                  ago
                </small>
              </p>
              {this.uid === localStorage.getItem("userID") ? (
              <div>
                <a
                  href=""
                  onClick={() => this.handleRemove(this.id)}
                  className="btn btn-primary"
                >
                  Delete
                </a>
                <a
                  href=""
                  onClick={() => this.handleChange()}
                  className="btn btn-primary"
                >
                  Edit
                </a>
                <a
                  onClick={() => this.IncrementItem() }
                  className="btn btn-primary"
                >
                  Like
                </a>
                { this.state.show ? <h2>{ this.state.count }</h2> : '' }
              </div>
              ) : (
                false
              )}
            </div>
            <img className="card-img-bottom" src={this.imageUrl} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default PublishPost;