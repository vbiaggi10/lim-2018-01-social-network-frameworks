import React, { Component } from "react";
import CreatePost from "./CreatePost";
import PublishPost from "./PublishPosts";
// import firebase from 'firebase';
// import { config } from '../../../Config/config';
// import 'firebase/database';
import "./ContentPost.css";

class ContentPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      uid: null
    };
    // this.post = firebase.initializeApp(config);
    this.db = window.firebase
      .database()
      .ref()
      .child("posts");
    this.addPost = this.addPost.bind(this);
    this.removePost = this.removePost.bind(this);
  }

  componentDidMount() {
    const { messages } = this.state;
    this.db.on("child_added", snap => {
      messages.push({
        id: snap.key,
        body: snap.val().body,
        uid: snap.val().uid,
        userName: snap.val().userName
      });
      this.setState({ messages });
    });
    this.db.on("child_removed", snap => {
      for (let index = 0; index < messages.length; index++) {
        if (messages[index].id === snap.key) {
          messages.splice(index, 1)
        }
      }
      this.setState({ messages });
    });
  }

  addPost(message) {
    this.db.push().set({
      body: message,
      uid: localStorage.getItem("userID"),
      userName: localStorage.getItem("user")
    });
  }

  removePost(id){
    this.db.child(id).removePost()
  }
  render() {
    return (
      <div className="col-md-7">
        <div className="create-post">
          <CreatePost addPost={this.addPost} />
          <PublishPost item={this.state.messages} removePost={this.removePost}/>
        </div>
      </div>
    );
  }
}

export default ContentPost;
