import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render() {
    const { body } = this.props;
    // console.log(body.props.children[0].props.path)
    return (
      <div className="content-bg">
        {body}
      </div>
    )
  }
}

export default Content;
