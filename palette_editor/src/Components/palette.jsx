import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ColorList from './colorList';
// components for each repo element

export default class Palette extends PureComponent {
  render() {
    return (
      <div className="Palette">
        <h1 className="Palette-name">{this.props.name}</h1>
        <ColorList />
      </div>
    );
  }
}

Palette.defaultProps = {
  name: ' ',
};

Palette.propTypes = {
  name: PropTypes.string,
};
