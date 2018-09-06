//DEPNDENCIES
import React, { Component } from 'react';
import Proptypes from "prop-types";
//ASSERT
import './css/Footer.css';

class Footer extends Component {
  static propTypes ={
    copyrigth: Proptypes.string,
  }
  render() {
   
    const {copyrigth = "&copy: React 2017"} = this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML = {{ __html: copyrigth }} />
      </div>
    );
  }
}

export default Footer;
