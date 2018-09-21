import React, { Component } from "react";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state={
      count:0,
      upLoad:0
    }
    this.addPost = this.addPost.bind(this);
  }

  addPost() {
    this.props.addPost(this.textInput.value, this.selectOption.value,this.state.count);
    this.textInput.value = "";
    this.textInput.focus();
  }

  render() {
    return (
      <div className="createPost">
        <select className="custom-select" id="inputGroupSelect01" ref={select => (this.selectOption = select)}>
          <option selected value="public">public</option>
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
          <progress value={this.state.upLoad} max="100"></progress>
          <input type="file" onChange={this.handleUpLoad} />
        </div>
        <div className="tools">
          <button onClick={this.addPost} className="btn">
            Publish
          </button>
        </div>
      </div>
    );
  }
}

export default CreatePost;
