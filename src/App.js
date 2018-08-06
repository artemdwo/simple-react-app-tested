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

  swithNameHandler = () => {
    this.setState({
      persons: [
        { name:"Jonny", age:31 },
        { name:"Jimmy", age:28, desc:"I like to do nothing!"},
        { name:"Jannie", age:22 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello there!</h1>
        <p>This is working! :)</p>
        <hr/>
          <button onClick={this.swithNameHandler}>Switch names</button>
        <hr/>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          clickRef={this.swithNameHandler}>{this.state.persons[1].desc}</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
