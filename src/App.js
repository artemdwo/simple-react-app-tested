import React, { Component } from 'react';

// styling
import './App.css';

// Components
import Person from './Person/Person'

// Main (root) components
class App extends Component {

  state = {
    persons: [
      { id: '001', name:"John", age:30 },
      { id: '002', name:"Jim", age:28, desc:"I like to do nothing!"},
      { id: '003', name:"Jane", age:26 }
    ],
    showPersonList: false
  }

  deletePersonHandler = (index) => {
    // Wrong approach due to JS array and object referencing
    // In current way, the MAIN state array\object is being mutated
    // const persons = this.state.persons

    // Better way: use slice() to create a copy
    // const persons = this.state.persons.slice()

    // The best way: to use spread operator [...] "three dots" to create a copy
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    // Find whether id requested is available in the data (state)
    const personIndex = this.state.persons.findIndex(prsn => {
      return prsn.id === id
    })

    // Create a copy of the found data (person)
    const person = {
      ...this.state.persons[personIndex]
    }

    // Assign (catch) a new value (name) from the event.target to 
    // the person found and copied
    person.name = event.target.value

    // Create a copy of the entire state to avoid direct mutation
    const persons = [...this.state.persons]

    // Change the updated person data within the copy 
    // of the state
    persons[personIndex] = person

    // Save (set) changed data (copy of the state) back to
    // the original state to take affect
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersonList
    this.setState({showPersonList: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if ( this.state.showPersonList ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              id={person.id}
              key={person.id}
              name={person.name} 
              age={person.age}
              clickRef={() => this.deletePersonHandler(index)} 
              changedRef={(event) => this.nameChangedHandler(event, person.id)} >{person.desc}</Person>
          })}
          {/* JSX sample has been left for the reference purpose */}
          {/* <Person 
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
            age={this.state.persons[2].age} /> */}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hello there!</h1>
        <p>This is working! :)</p>
        <hr/>
          {/* nameSwitcher is not in use anymore */}
          {/* <button
            id='nameSwitcher'
            style={style}
            onClick={() => this.swithNameHandler('Superman')}>Switch names</button> */}
          <button
            id='personToggler'
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons list</button>
        <hr/>
        {persons}
      </div>
    );
  }
}

export default App;
