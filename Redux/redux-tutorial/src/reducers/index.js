import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import fetching from './fetching'

export default combineReducers({
    page,
    user,
    fetching
})