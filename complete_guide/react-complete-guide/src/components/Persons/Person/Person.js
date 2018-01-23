import React, {Component} from 'react';
import styles from './Person.css';


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
            <div className={styles.Person}>
                <button onClick={this.props.removeHandler}>Remove</button>
                <p>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeHandler} value={this.props.name} />
            </div>
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
    }

}

export default Person;