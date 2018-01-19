import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
    return props.persons.map((item, index) => {
        return (
                <Person
                    key={item.id}  
                    name={item.name}
                    age={item.age}
                    removeHandler={props.deleteClick.bind(this, index)}
                    changeHandler={props.changeTipe.bind(this, item.id)}>
                    
                    {item.hibbies}

                </Person>
                );
    })
}

export default Persons;