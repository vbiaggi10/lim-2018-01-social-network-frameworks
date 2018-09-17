import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    
    const { title, items } = this.props;

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="">{title}</a>
        </nav>
        <ul className="nav nav-tabs bg-info">
          {items && items.map((item, key) =>
            <li className="nav-item" key={key}>
              <Link to={item.url} className="nav-link" name={item.title}>{item.title}</Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default NavBar;
