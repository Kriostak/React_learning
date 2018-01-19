import React from 'react';
import styles from './Person.css';


const Person = (props) => {

    return (
        <div className={styles.Person}>
            <button onClick={props.removeHandler}>Remove</button>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeHandler} value={props.name} />
        </div>
    );
}

export default Person;