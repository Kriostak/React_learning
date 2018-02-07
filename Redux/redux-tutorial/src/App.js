import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Main from './components/main'
import configureStore from './store/configureStore'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
