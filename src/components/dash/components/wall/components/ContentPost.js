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
      .ref("posts/");
    this.removePost = this.removePost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.removePost = this.removePost.bind(this);
  }

  componentDidMount() {
    const { messages } = this.state;

    this.db.on("value", snapFirst => {
      const key=Object.keys(snapFirst.val());
      key.sort();
      key.reverse();
      key.forEach(element=>{
        this.db.child(element).once('value',snapSecond=>{
          if (
            snapSecond.val().uid === localStorage.getItem("userID") ||
            snapSecond.val().privacy === "public"
          ) {
            messages.push({
              id: snapSecond.key,
              privacy: snapSecond.val().privacy,
              body: snapSecond.val().body,
              uid: snapSecond.val().uid,
              userName: snapSecond.val().userName,
              userEmail: snapSecond.val().userEmail,
              imageUrl: snapSecond.val().imageUrl,
              timestamp: snapSecond.val().timestamp
            });
          }
          this.setState({ messages });
        })
      })
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
    this.db.child(id).remove();
  }

  addPost(message, selected) {
    this.db.push().set({
      body: message,
      privacy: selected,
      uid: localStorage.getItem("userID"),
      userName: localStorage.getItem("user"),
      userEmail: localStorage.getItem("userEmail"),
      timestamp: window.firebase.database.ServerValue.TIMESTAMP
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
            {this.state.messages.map(message => {
              let user;
              if (message.userName === "null") {
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
                  userName={message.userName}
                  userEmail={message.userEmail}
                  removePost={this.removePost}
                  imageUrl={message.imageUrl}
                  timestamp={message.timestamp}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentPost;
