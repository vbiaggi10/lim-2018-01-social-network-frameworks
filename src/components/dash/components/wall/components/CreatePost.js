import React, { Component } from "react";
import "./CreatePost.css";
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
  }

  addPost() {
    this.props.addPost(this.textInput.value);
    this.textInput.value = "";
    this.textInput.focus();
  }

  render() {
    return (
      <div className="createPost">
        <select
          name="privacy"
          id="privacyNewPost"
          className="pull-right privacy-new-post select-style"
        >
          <option value="public">public</option>
          <option value="private">private</option>
        </select>
        <div className="form-group" id="publicPost">
          <textarea
            ref={input => (this.textInput = input)}
            name="texts"
            cols="30"
            rows="5"
            className="form-control"
            placeholder="Write an education post"
          />
        </div>
        <div>
          <div className="tools">
            <button onClick={this.addPost} className="btn pull-right">
              Publish
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
