import React, { Component } from 'react';
import './App.css';

import PaletteList from './Components/paletteList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // mock data for designing
      palettes: [],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Palette Editor </h2>
        </div>
        <p className="App-intro">
        A simple interface to build and explore visualisation palettes for Volume files.
        </p >
        <div className="App-body" >
          <PaletteList />
        </div>
      </div>

    );
  }
}
