import { createStore } from 'redux'

import rootReducer from '../reducers'

const configureStore = (initalState) => {
    const store = createStore(rootReducer, initalState)

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore