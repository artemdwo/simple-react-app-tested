import React, { Component } from 'react';

// styling
import './App.css';

// Components
import Person from './Person/Person'

// Main (root) components
class App extends Component {

  state = {
    persons: [
      { name:"John", age:30 },
      { name:"Jim", age:28, desc:"I like to do nothing!"},
      { name:"Jane", age:26 }
    ]
  }

  swithNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: "Jimmy", age: 28, desc:"I like to do nothing!"},
        { name: "Jannie", age: 22 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "John", age: 31 },
        { name: event.target.value, age: 28, desc: "I like to do nothing!"},
        { name: "Jannie", age: 22 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello there!</h1>
        <p>This is working! :)</p>
        <hr/>
          <button onClick={() => this.swithNameHandler('Superman')}>Switch names</button>
        <hr/>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          clickRef={this.swithNameHandler.bind(this, 'Jack')} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          clickRef={this.swithNameHandler.bind(this, 'Jakkie')}
          changedRef={this.nameChangedHandler}>{this.state.persons[1].desc}</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
