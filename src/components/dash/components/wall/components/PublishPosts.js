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
    this.privacy = props.privacy;
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
  }

  handleRemove(id) {
    this.props.removePost(id)
  }

  
  render() {
    let isPrivate, isPublic;
    if(this.privacy === 'private') isPrivate = true; else isPrivate = false;
    if(this.privacy === 'public') isPublic = true; else isPublic = false;
    return (
      <div id="posts">
        <div id="loadedPost">
          <div className="card mt-3 mb-3" key={this.id}>
            {this.uid === localStorage.getItem('userID') ? (<select className="custom-select card-header" id="inputGroupSelect01">
              {/* {this.privacy === 'public' ? document.getElementById('public').setAttribute('selected','selected') : document.getElementById('private').setAttribute('selected','selected')} */}
              <option value="public" selected={isPublic}>public</option>
              <option value="private" selected={isPrivate} >private</option>
            </select>) : false}
            <div className="card-body">
              <p className="card-subtitle mb-2 text-muted">
                {this.user}
              </p>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PublishPost;
