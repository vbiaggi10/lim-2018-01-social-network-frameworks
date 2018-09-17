import React, { Component } from 'react';


class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  };

  entryAccount(e) {
    if (e.target.name === 'email') {
      this.setState({ email: e.target.value })
    } else if (e.target.name === 'password') {
      this.setState({ password: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
  
    window.firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(() => {
      alert('ingresaste');          
      this.setState({ email: '', password: ''})
    }).catch(error => {
      alert(error.code);
    });
  } 

  resetPassword(e) {
    e.preventDefault();

    const user = {
      email: this.state.email
    };
    
    window.firebase.auth().sendPasswordResetEmail(
      user.email).then( () => {
      alert("Password Reset Email Sent");
			this.setState({ email: '', password: ''})
    }).catch(error => {
      alert(error.code)
    })
  }

  signOther(targetName){
    let provider;
    if (targetName === "signGoogle"){
      provider = new window.firebase.auth.GoogleAuthProvider();
      return provider;
    }else if (targetName === "signTwitter"){
      provider = new window.firebase.auth.TwitterAuthProvider();
      return provider;
    }else if (targetName === "signFacebook"){
      provider = new window.firebase.auth.FacebookAuthProvider();
      return provider;          
    }
  }

  firebaseOtherAuth(e){
    const provider = this.signOther(e.target.name)
    window.firebase.auth().signInWithPopup(provider).then(result => {
      alert('ingresaste');
    }).catch(function(error) {
      alert(error.code)
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Sing in</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="bmd-label-floating">Email address (two help blocks)</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" onChange={this.entryAccount.bind(this)} value={this.state.email} />
            <span className="bmd-help">We'll never share your email with anyone else.</span>
            <span className="bmd-help" >And this is probably from a second plugin showing in a non-optimal way</span>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="bmd-label-floating">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={this.entryAccount.bind(this)} value={this.state.password} />
          </div>
          <button className="btn btn-raised btn-info" name="submit">Send</button>
        </form>
        <div>
          <p className="text-right"><a href="" onClick={this.resetPassword.bind(this)}>Forgot password?</a></p>
        </div>
        <div className="text-center">
          <span>
            Or sign up using
          </span>
        </div>
        <div className="text-center">
          <button className="btn btn-outline-info" name="signGoogle" onClick={this.firebaseOtherAuth.bind(this)}>Google</button>
          <button className="btn btn-outline-info" name="signTwitter" onClick={this.firebaseOtherAuth.bind(this)}>Twitter</button>
          <button className="btn btn-outline-info" name="signFacebook" onClick={this.firebaseOtherAuth.bind(this)}>Facebook</button>
        </div>
      </div >
    )
  }
}

export default SignIn;
