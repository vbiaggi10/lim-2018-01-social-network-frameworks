import React, { Component } from "react";
import CreatePost from "./CreatePost";
import PublishPost from "./PublishPosts";
import "./ContentPost.css";

class ContentPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      uid: null
    };
    this.db = window.firebase
      .database()
      .ref()
      .child("posts");
    this.removePost = this.removePost.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  componentDidMount() {
    const { messages } = this.state;
    this.db.on("child_added", snap => {
      messages.push({
        id: snap.key,
        privacy: snap.val().privacy,
        body: snap.val().body,
        uid: snap.val().uid,
        userName: snap.val().userName,
        userEmail: snap.val().userEmail
      });
      this.setState({ messages });
    });
    this.db.on("child_removed", snap => {
      for (let index = 0; index < messages.length; index++) {
        if (messages[index].id === snap.key) {
          messages.splice(index, 1);
        }
      }
      this.setState({ messages });
    });
  }

  removePost(id) {
    this.db.child(id).remove()
  }

  addPost(message, selected) {
    this.db.push().set({
      body: message,
      privacy: selected,
      uid: localStorage.getItem("userID"),
      userName: localStorage.getItem("user"),
      userEmail: localStorage.getItem("userEmail")
    });
  }
  render() {
    return (
      <div className="col-md-7">
        <div className="create-post">
          <CreatePost addPost={this.addPost} />
        </div>
        <div>
          <h3 className="mt-4">Post</h3>
          <div>
            {
              this.state.messages.map(message => {
                let user;
                if (message.userName === 'null') {
                  user = message.userEmail;
                } else {
                  user = message.userName;
                }
                return (
                  <PublishPost
                    content={message.body}
                    privacy={message.privacy}
                    id={message.id}
                    uid={message.uid}
                    key={message.id}
                    user={user}
                    removePost={this.removePost}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ContentPost;
