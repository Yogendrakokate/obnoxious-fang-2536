import { legacy_createStore, applyMiddleware, combineReducers, } from "redux";
import thunk from 'redux-thunk'
import { reducer as AuthReducer} from "./AuthReducer/reducer"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootReducer = combineReducers({
    AuthReducer,
})
const store = legacy_createStore(RootReducer, applyMiddleware(thunk))
export { store }