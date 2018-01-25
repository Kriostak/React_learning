import React, { PureComponent } from 'react';

import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import WithClassAnother from '../hoc/WithClassAnother';

class App extends PureComponent {

  constructor(props) {
    console.log('[App.js] Inside constructor(props) ');
    super(props);

    this.state = {
      persons: [
        {
          name: 'Horun',
          age: 233,
          id:2
        },
        {
          name: 'Furtiks',
          age: 20,
          hobbies: 'Like cakes.',
          id: 25
        },
        {
          name: 'Bobo',
          age: 1,
          id: 10
        }
      ],
      showPersons: false,
      toggleClicked: 0
    }

  }

  changeNameHandler = (id, event) => {

    const personIndex = this.state.persons.findIndex((item) => {
      return item.id === id;
    });

    const personNew = {
      ...this.state.persons[personIndex]
    }

    personNew.name = event.target.value;

    const personsNew = [...this.state.persons];
    personsNew[personIndex] = personNew;

    this.setState({
      persons: personsNew
    });

  }

  deletePersonHandler = (index) => {

    const newArray = [...this.state.persons];
    newArray.splice(index, 1);

    this.setState({
      persons: newArray
    });

  }

  togglePersonsHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });

  }

  showPersonsHandler = () => {

    this.setState({
      showPersons: true
    });

  }

  componentWillMount() {

    console.log('[App.js] Inside componentWillMount() ');

  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps(nextProps) ', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log('[UPDATE App.js] inside shouldComponentUpdate(nextProps, nextState)', nextProps, nextState);
  //     return nextState.persons !== this.state.persons ||
  //            nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate(nextProps, nextState)', nextProps, nextState);
  }

  render() {
    console.log('[App.js] Inside render() ');
    let persons = null;

    if (this.state.showPersons) {

      persons = <Persons 
                  persons={this.state.persons} 
                  deleteClick={this.deletePersonHandler} 
                  changeTipe={this.changeNameHandler} />;

    }

    return (
        
        // <WithClass classes={styles.App}>
        <Aux>
          <button onClick={this.showPersonsHandler}>Show Persons</button>
          <p className={styles.textCenter}>{this.state.toggleClicked}</p>
          <Cockpit 
            appTitle={this.props.title}
            toggleList={this.togglePersonsHandler} 
            personsList={this.state.persons} 
            showPersons={this.state.showPersons} />
          {persons}
        </Aux>
        // </WithClass>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }

  componentDidMount() {

    console.log('[App.js] Inside componentDidMount() ');

  }

}

export default WithClassAnother(App, styles.App);
