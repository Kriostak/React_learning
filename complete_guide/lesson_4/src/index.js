import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Person(props) {

    return (
      <div className="person">
        <h1>{props.name}</h1>
        <p>Your Age: {props.age}</p>
      </div>
    );
  
}

const app = (
    <div className="persons-wrapper">
        <Person name="Dmitry" age="26" />
        <Person name="Other" age="21" />
    </div>
);

ReactDOM.render(app, document.querySelector('#root'));