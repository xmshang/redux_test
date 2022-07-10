/* 
  该文件用于汇总所有的reducers为一个总的reducer
*/
// 引入combineReducers，用于汇总多个reducer
import { combineReducers } from "redux";
// 引入为count组件服务的reducer
import count from './count'
// 引入为personReducer组件服务的reducer
import persons from "./person";

// 汇总所有reducers成一个总的
export default combineReducers({
    count,
    persons
})