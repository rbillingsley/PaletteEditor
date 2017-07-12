import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Color from './color';

export default class ColorList extends PureComponent {
  render() {
    return (
      <div>
        {this.props.color_list.map((node =>
          (<Color
            key={node.key}
            color={node.props.color}
          />)
        ))}
        <button className="New-color-button"> {'+'} </button>
      </div>
    );
  }
}

ColorList.defaultProps = {
  color_list: Array(3).fill(<Color
    key="0"
    color="#ff0"
  />),
};

ColorList.propTypes = {
  color_list: PropTypes.array,
};

