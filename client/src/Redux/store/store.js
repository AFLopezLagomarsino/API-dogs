import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import rootReducer from "../Reducers/reducers"

export const store = createStore(rootReducer, applyMiddleware(thunk))
