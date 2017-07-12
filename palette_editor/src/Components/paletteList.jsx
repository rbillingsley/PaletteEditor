import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Palette from './palette';
import NewPalette from './newPalette';

export default class PaletteList extends PureComponent {
  render() {
    return (
      <div className="PaletteList">
        {this.props.palette_list.map((node =>
          (<Palette
            key={node.key}
            count={node.props.count}
            name={node.props.name}
            created={node.props.created}
            description={node.props.description}
            color_list={node.props.color_list}
          />)
        ))}
        <NewPalette />
      </div>
    );
  }
}
PaletteList.defaultProps = {
  palette_list: Array(1).fill(<Palette
    key="0"
    name="Test Palette #1"
  />),
};

PaletteList.propTypes = {
  palette_list: PropTypes.array,
};
