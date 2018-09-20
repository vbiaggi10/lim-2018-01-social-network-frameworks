import React, { Component } from "react";

class PublishPost extends Component {
  constructor(){
    super();
    this.handleRemovePost = this.handleRemovePost.bind(this)
  }
  handleRemovePost(id){
    this.props.removePost(id)
  }

  render() {
    console.log(this.props);
    
    return (
      <div id="posts">
        <h3>Posts</h3>
        <div id="loadedPost">
          {this.props.item.map(message => {
            return (
              <div className="card" key={message.id}>
                <div className="card-body">
                  <p className="card-subtitle mb-2 text-muted">
                    {message.userName}
                  </p>
                  <p>{message.body}</p>
                </div>
                <button onClick={()=>this.handleRemovePost(message.id)}>Eliminar</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PublishPost;
