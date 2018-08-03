import React, { Component } from 'react';

// styling
import './App.css';

// Components
import Person from './Person/Person'

// Main (root) components
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello there!</h1>
        <p>This is working! :)</p>
        <Person name="John" age="30" />
        <Person name="Jim" age="28" >I like to do nothing!</Person>
        <Person name="Jane" age="26" />
      </div>
    );
  }
}

export default App;
