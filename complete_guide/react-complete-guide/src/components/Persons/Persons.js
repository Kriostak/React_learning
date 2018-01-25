import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        console.log('[Persons.js] Inside constructor(props) ', props);
        super(props);

    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount() ');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps(nextProps) ', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] inside shouldComponentUpdate(nextProps, nextState)', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || 
    //            nextProps.changeHandler !== this.props.changed || 
    //            nextProps.removeHandler !== this.props.removeHandler;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate(nextProps, nextState)', nextProps, nextState);
    }

    render() {
        console.log('[Persons.js] Inside render() ');
        return this.props.persons.map((item, index) => {
            return (
                    <Person
                        key={item.id}
                        position={index}  
                        name={item.name}
                        age={item.age}
                        removeHandler={this.props.deleteClick.bind(this, index)}
                        changeHandler={this.props.changeTipe.bind(this, item.id)}>
                        
                        {item.hibbies}
    
                    </Person>
                    );
        });

    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate() ');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount() ');
    }
    
}

export default Persons;