import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class NewPalette extends PureComponent {
  render() {
    return (
      <div className="NewPalette">
        <button className="NewPalette-button"> {this.props.text} </button>
      </div>
    );
  }
}

NewPalette.defaultProps = {
  text: '+',
};

NewPalette.propTypes = {
  text: PropTypes.string,
};
