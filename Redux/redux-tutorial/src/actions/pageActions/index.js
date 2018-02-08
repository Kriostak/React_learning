import { SET_YEAR } from '../../constants/Page'
import { FETCHING } from '../../constants/Fetching'

export const setYear = (year) => {

    return (dispatch) => {

        dispatch({
            type: FETCHING,
            payload: true
        })

        setTimeout(() => {

            switch(year) {
                case 2014: {
                    dispatch({
                        type: SET_YEAR,
                        payload: {
                            year: year,
                            photos: new Array(2)
                        }
                    })
                    break
                }
                case 2015: {
                    dispatch({
                        type: SET_YEAR,
                        payload: {
                            year: year,
                            photos: new Array(3)
                        }
                    })
                    break
                }
                case 2016: {
                    dispatch({
                        type: SET_YEAR,
                        payload: {
                            year: year,
                            photos: new Array(4)
                        }
                    })
                    break
                }
                default: {
                    console.log(`error`)
                }
            }

            dispatch({
                type: FETCHING,
                payload: false
            })

        }, 5000)

    }

}