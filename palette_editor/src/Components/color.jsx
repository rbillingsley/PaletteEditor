import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Color extends PureComponent {
  render() {
    return <p className="Color" background-color={this.props.color} />;
  }
}

Color.defaultProps = {
  color: ' ',
};

Color.propTypes = {
  color: PropTypes.string,
};
