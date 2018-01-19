import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
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

  render() {

    let persons = null;

    if (this.state.showPersons) {

      persons = <Persons 
                  persons={this.state.persons} 
                  deleteClick={this.deletePersonHandler} 
                  changeTipe={this.changeNameHandler} />;
    }

    

    return (
        <div className={styles.App}>
          
          <Cockpit 
            toggleList={this.togglePersonsHandler} 
            personsList={this.state.persons} 
            showPersons={this.state.showPersons} />
          {persons}

        </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }

}

export default App;
