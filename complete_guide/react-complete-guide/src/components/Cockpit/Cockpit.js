import React from 'react';
import styles from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) => {

    let classes = [];
    const personsLength = props.personsList.length;

    if (personsLength <= 2) {
      classes.push(styles.red);
    }

    if (personsLength <= 1) {
      classes.push(styles.bold);
    }

    classes = classes.join(' ');

    let btnClass = styles.Button;
    if (props.showPersons) {
        btnClass = [styles.Button, styles.red].join(' ');
    }

    return (
        <Aux>
            <h1>Hi, I'm React App and my title is {props.appTitle}</h1>
            <p className={props.classesList}>It is king of magic.</p>

            <button 
                className = {btnClass}
                onClick={props.toggleList}>Toggle Persons</button>
        </Aux>
    );

};

export default Cockpit;