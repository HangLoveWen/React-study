import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//引入react-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";
import allReducer from './reducers'
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))