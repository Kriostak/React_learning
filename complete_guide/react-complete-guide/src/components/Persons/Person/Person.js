import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Person.css';
// import WithClass from '../../../hoc/WithClass';
import Wrapper from '../../../hoc/Wrapper';
import WithClassAnother from '../../../hoc/WithClassAnother';

class Person extends Component {

    constructor(props) {

        super(props);
        console.log('[Person-item.js] Inside constructor(props) ', props);
    }

    componentWillMount() {
        console.log('[Person-item.js] Inside componentWillMount() ');
    }

    render() {
        console.log('[Person.js] Inside render() ');
        return (
            // <WithClass classes={styles.Person}>
            <Wrapper>
                <button onClick={this.props.removeHandler}>Remove</button>
                <p>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changeHandler} 
                    value={this.props.name}
                    ref={(someName) => { this.someAnotherName = someName }} />
            </Wrapper>
            // </WithClass>
        );
        // return [
        //     <button key="1" onClick={this.props.removeHandler}>Remove</button>,
        //     <p key="2">I'm a {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key="3">{this.props.children}</p>,
        //     <input key="4" type="text" onChange={this.props.changeHandler} value={this.props.name} />
        // ];

    }

    componentDidMount() {
        console.log('[Person.js] Inside componentWillMount() ');
        if (this.props.position === 0) {
            this.someAnotherName.focus();
        }
        
    }

}

Person.propTypes = {
    removeHandler: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changeHandler: PropTypes.func
};

export default WithClassAnother(Person, styles.Person);