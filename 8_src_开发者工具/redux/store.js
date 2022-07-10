/* 
该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入createStore, 专门用于创建redux中最核心的store对象
import { createStore, applyMiddleware, combineReducers } from "redux";
// 引入为count组件服务的reducer
import countReducer from './reducers/count'
// 引入redux-thunk用于异步action
import thunk from "redux-thunk";
import personReducer from "./reducers/person";
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'


// 汇总所有reducers成一个总的
const allReducer = combineReducers({
    count: countReducer,
    persons: personReducer
})

// 暴露store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
