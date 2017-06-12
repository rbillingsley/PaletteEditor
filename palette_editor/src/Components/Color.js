import React, { Component } from 'react';

export default class ColorList extends Component {
  render(props) {
    return (
        <div>
            <Color key="0" color="#fff"/>
            <Color key="1" color="#000"/>
            <Color key="2" color="#f00"/>
            <Color key="3" color="#0f0"/>
            <Color key="4" color="#00f"/>
            <NewColor/>
        </div>
    )
  }
}

export class Color extends Component {
  render(props) {
    return <p className="Color" background-color={this.props.color}/>;
  }
}

export class NewColor extends Component {
    render() {
    return (
    <div className="New-color">
        <button className="New-color-button"> + </button>
    </div>
    )
  }
}