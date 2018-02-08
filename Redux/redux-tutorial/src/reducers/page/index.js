import { SET_YEAR } from '../../constants/Page'

const initialState = {
    year: 2016,
    photos: []
}

const page = (state = initialState, action) => {

    switch (action.type) {
        case SET_YEAR: {
            return { ...state, year: action.payload.year, photos: action.payload.photos }
        }
        default: {
            return state
        }
    }

}

export default page