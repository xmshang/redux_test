/* 
 该文件专门为Count组件生成action对象
*/

import { INCREMENT, DECREMENT } from "./constant"

export const createIncreamentAction = data => ({type: INCREMENT, data})
export const createDecreamentAction = data => ({type: DECREMENT, data})

// function createIncreamentAction(data) {
//     return {type: 'incremnet', data}
// }
// function createDecreamentAction(data) {
//     return {type: 'decremnet', data}
// }

