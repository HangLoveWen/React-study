//该文件用于汇总所有的reducer作为一个总的reducer
import count from './count'
import persons from './person'
import { combineReducers } from "redux";
const allReducer = combineReducers({
  count,
  persons
})
export default allReducer