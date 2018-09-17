import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import Content from './Content';

import items from '../data/menu'

class Main extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render() {
    const { body } = this.props;
      body.props.children.map((item) =>{
        if(item.props.path !== '/profile' && item.props.path !== '/wall'){
          return item
        }
      })
    return (
      <div>
        <NavBar title="BRAINNET" items={items}/>
        <Content body={body} />
      </div>
    )
  }
}

export default Main;
