//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Asserts
import logo from './imagenes/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default Header;
