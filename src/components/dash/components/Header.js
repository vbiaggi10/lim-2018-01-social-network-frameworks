import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  signOut() {
    window.firebase.auth().signOut();
  }
  render() {
    const { title, items } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="">{title}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {items && items.map((item, key) =>
                <li className="nav-item" key={key}>
                  <Link to={item.url} className="nav-link" name={item.title}>{item.title}</Link>
                </li>
              )}
              <li className="nav-item">
                <a href="" className="nav-link" onClick={this.signOut.bind(this)}>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
