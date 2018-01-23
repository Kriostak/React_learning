import React, { PureComponent } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
      showPersons: false
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
    this.setState({
      showPersons: !doesShow
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
        <div className={styles.App}>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit 
            appTitle={this.props.title}
            toggleList={this.togglePersonsHandler} 
            personsList={this.state.persons} 
            showPersons={this.state.showPersons} />
          {persons}

        </div>
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

export default App;
