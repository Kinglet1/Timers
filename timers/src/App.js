import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { Button } from 'react-toolbox/lib/button';

import Wrapper from './Wrapper';
import Buttons from './ButtonView';

class App extends Component {
  render() {
    return (
      <div className="App">
	    <Button label="I am react-toolbox button!" raised accent />

	    <h2>Buttons demo</h2>
	    <Buttons />

	    <h2>Buttons in wrapper demo</h2>
	    <Wrapper />
      </div>
    );
  }
}

export default App;