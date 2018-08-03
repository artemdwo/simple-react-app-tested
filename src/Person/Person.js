import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Hey! I'm a React Component!</p>
            <p>My name is {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <hr/>
        </div>
    )
}

export default person;