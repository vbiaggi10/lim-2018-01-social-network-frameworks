import React, { Component } from 'react';


class Home extends Component {
  handleSubmit(e) {
    e.preventDefault();
    window.firebase.auth().signInAnonymously().then(() => {
      alert('ingresaste');
    }).catch(error => {
      alert(error.code);
    });
  }
	render() {
		return (
			<div className="container col-4 mt-4 mb-4">
				<h2><a>BRAINNET</a></h2>
				<div className="paragraph">
          <p>"Education is the most powerful weapon which you can use to change the world."</p>
          <p className="text-right">-Nelson Mandela</p>
        </div>
        <div className="signin-anonymous">
          <div className="txt1 text-center p-t-34 p-b-10 login-anonymous-text">
            <span>
              Do you wanna try?
            </span>
          </div>
          <form onSubmit={this.handleSubmit.bind(this)} className="text-center">
            <button className="btn btn-raised btn-outline-info">Sign in anonymous</button>
          </form>
        </div>
			</div >
		)
	}
}

export default Home;
