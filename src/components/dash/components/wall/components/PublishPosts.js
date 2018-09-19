import React, { Component } from "react";

class PublishPost extends Component {
  render() {
    return (
      <div id="posts">
        <h3>Posts</h3>
        <div id="loadedPost">
          {this.props.item.map(message => {
            return (
              <div className="card mt-3 mb-3" key={message.id}>
                <div className="card-body">
                  <p className="card-subtitle mb-2 text-muted">
                    {message.userName}
                  </p>
                  <p>{message.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PublishPost;
