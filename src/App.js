import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Main from './components/Main'
import Wall from './components/Wall';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    window.firebase.auth().onAuthStateChanged(user => {
      // console.log(user);
      if(user){
        this.setState({user})
        // localStorage.setItem('user', user.uid);
      }else{
        this.setState({user: null})
        // localStorage.removeItem('user');
      }
    })
  }
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div>
       {this.state.user ? (<Wall />) : (<Main body={children} />)}
      </div>
    )
  }
}

export default App;
