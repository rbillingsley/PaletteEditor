import React, { Component } from 'react';
import './App.css';

import PaletteList, { Palette } from './Components/Palette.js';

class App extends Component {
    constructor() {
    super();
    this.state = {
      //mock data for designing
        palettes: Array(1).fill( <Palette
                                key="0"
                                name="Test Palette #1"
                                />
                                )
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
      </p>
      <PaletteList palette_list={this.state.palettes}/>
      </div>
      
    );
  }
}

export default App;