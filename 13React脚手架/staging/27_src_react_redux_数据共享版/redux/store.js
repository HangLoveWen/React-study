import { createStore, applyMiddleware, combineReducers } from "redux";
import countreducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from "redux-thunk";
const allReducer = combineReducers({
  he: countreducer,
  rens: personReducer
})
export default createStore(allReducer, applyMiddleware(thunk))