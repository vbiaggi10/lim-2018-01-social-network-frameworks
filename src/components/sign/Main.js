import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Home from './components/Home'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// import items from '../../data/menu'

class Main extends Component {

  render() {
    return (
      <div className="content-bg">
        <SignIn />
        <Home />
        <SignUp />
      </div>
    )
  }
}

export default Main;
