/* 
 该文件专门为Count组件生成action对象
*/

import { INCREMENT, DECREMENT } from "../constant"
import store from "../store"

// 同步action, 是指action的值为Object类型的一般对象
export const increament = data => ({ type: INCREMENT, data })
export const decreament = data => ({ type: DECREMENT, data })

// 异步action, 是指action的值为函数, 异步action中一般会调用同步action，异步action不是必须要用的
export const increamentAsync = (data, time) => {
    return () => {
        setTimeout(() => {
            // store.dispatch({type: INCREMENT, data})
            store.dispatch(increament(data))
        }, time);
    }
}
