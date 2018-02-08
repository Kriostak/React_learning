import { FETCHING } from '../../constants/Fetching'

const initialState = {
    fetching: false
}

const fetching = (state = initialState, action) => {

    switch (action.type) {
        case FETCHING: {
            return {
                ...state,
                fetching: action.payload
            }
        }
        default: {
            return state
        }
    }

}

export default fetching