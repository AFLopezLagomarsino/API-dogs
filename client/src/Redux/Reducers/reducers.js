import { GET_DOGS, ORDER, FILTER, CLEAR_FILTER } from "../actions.js/actions"
const initialState = {
    dogs: []
}



function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload
            }
        default:
            return {
                ...state
            }
    }

}

export default rootReducer