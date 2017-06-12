import React, { Component } from 'react';
import ColorList from './Color.js'
//components for each repo element
export default class PaletteList extends Component {
  render(props) {
    return (
      <div className="PaletteList">
        {this.props.palette_list.map(( node =>
        <Palette
          key={node.key} 
          count={node.props.count} 
          name={node.props.name} 
          created={node.props.created} 
          description={node.props.description}
          color_list={this.color_list}
          />
        ))}
        <NewPalette/>
      </div>
    )
  }
}

export class Palette extends Component {
  render(props) {
    return (
      <div className="Palette">
        <Name text={this.props.name}/>
        <ColorList/>
      </div>
    )
  }
}

export class Name extends Component {
  render(props) {
    return <h1 className="Palette-name">{this.props.text}</h1>;
  }
}

export class NewPalette extends Component {
    render() {
    return (
    <div className="NewPalette">
        <button className="NewPalette-button"> + </button>
    </div>
    )
  }
}
