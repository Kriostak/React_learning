import React from 'react';
import styles from './Cockpit.css';

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

    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.red;
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Hi, I'm React App</h1>
            <p className={props.classesList}>It is king of magic.</p>

            <button 
                className = {btnClass}
                onClick={props.toggleList}>Toggle Persons</button>
        </div>
    );

};

export default Cockpit;