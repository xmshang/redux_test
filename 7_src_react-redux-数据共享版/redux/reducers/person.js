import { ADD_PERSON } from "../constant"

// 初始化人的列表
const initState = [
    { id: '01', name: 'tom', age: 18 }
]
export default function personReducer(preState = initState, action) {

    console.log('personReducer@#@#@#')

    const { type, data } = action
    switch (type) {
        case ADD_PERSON: // 添加一个人
            return [data, ...preState]
        default:
            return preState
    }
}