import { legacy_createStore, applyMiddleware, combineReducers, } from "redux";
import thunk from 'redux-thunk'
import { reducer as AppReducer} from "./AppReducer/reducer"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootReducer = combineReducers({
    AppReducer,
})
const store = legacy_createStore(RootReducer, applyMiddleware(thunk))
export { store }