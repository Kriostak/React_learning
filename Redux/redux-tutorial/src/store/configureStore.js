import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const configureStore = (initalState) => {
    const logger = createLogger()
    const store = createStore(
        rootReducer, 
        initalState,
        applyMiddleware(thunk, logger))

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore