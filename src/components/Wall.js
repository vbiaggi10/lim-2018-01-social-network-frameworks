import React, { Component } from 'react';


class Wall extends Component {
	signOut(){
		window.firebase.auth().signOut().then(()=> {
		  }).catch(error => {
		  });
	}
	render() {
		return (
			<div className="container">
				<h2>Wall</h2>
				<button onClick={this.signOut.bind(this)}>Salir</button>
			</div>
		)
	}
}

export default Wall;
