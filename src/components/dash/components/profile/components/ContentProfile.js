import React, { Component } from "react";
import CreatePost from "../../wall/components/CreatePost";
import PublishPost from "../../wall/components/PublishPosts";

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
    // const userId = window.firebase.auth().currentUser.uid;
  }

  componentDidMount() {
    const { messages } = this.state;
    this.db.on("child_added", snap => {
      
      if (snap.val().uid === localStorage.getItem("userID")) {
        messages.push({
          id: snap.key,
          privacy: snap.val().privacy,
          body: snap.val().body,
          uid: snap.val().uid,
          userName: snap.val().userName,
          userEmail: snap.val().userEmail,
          imageUrl: snap.val().imageUrl,
          count:snap.val().count,
          timestamp: snap.val().timestamp
        });
      }
      this.setState({ messages });
    });
    this.db.on("child_removed", snap => {
      for (let index = 0; index < messages.length; index++) {
        if (snap.val().uid === localStorage.getItem("userID")) {
          if (messages[index].id === snap.key) {
            messages.splice(index, 1);
          }
        }
      }
      this.setState({ messages });
    });
  }

  removePost(id) {
    this.db.child(id).remove();
  }

  addPost(message, selected,count) {
    this.db.push().set({
      body: message,
      privacy: selected,
      uid: localStorage.getItem("userID"),  
      userName: localStorage.getItem("user"),
      userEmail: localStorage.getItem("userEmail"),
      count:count,
      timestamp: window.firebase.database.ServerValue.TIMESTAMP
    });
  }

  render() {
    return (
      <div className="col-md-7">
        <div className="create-post">
          <CreatePost addPost={this.addPost} />
        </div>
        <div className="posts">
          <div>
            <h3 className="mt-4">Post</h3>
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
                  count={message.count}
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
