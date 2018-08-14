import React from 'react';

import './Person.css'

const person = (props) => {
    return (
        <div id={props.id} className="Person">
            <p>Hey! I'm a React Component!</p>
            <p onClick={props.clickRef}>My name is {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changedRef} value={props.name}/>
        </div>
    )
}

export default person;