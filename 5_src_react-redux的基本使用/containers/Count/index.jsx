// 引入count的ui组件
import CountUI from '../../components/Count'
// 引入action
import { 
    createIncreamentAction, 
    createDecreamentAction, 
    createIncreamentAsyncAction 
} from '../..//redux/count_action'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

/* 
   1.mapStateToProps函数返回的是一个对象：
   2.返回对象中的key就作为传递给UI组件的props的Key, alue作为传递给UI组件的props的value--状态 
   3.mapStateToProps用于传递状态
*/
function mapStateToProps(state) {
    return { count: state }
}
/*
   1.mapDispatchToProps函数返回的是一个对象：
   2.返回对象中的key就作为传递给UI组件的props的Key, alue作为传递给UI组件的props的value--操作状态的方法 
   3.mapDispatchToProps用于传递方法
*/
function mapDispatchToProps(dispatch) {
    return {
        // 通知redux执行加法
        jia: number => dispatch(createIncreamentAction(number)),
        jian: number => dispatch(createDecreamentAction(number)),
        jiaAsync: (number, time) => dispatch(createIncreamentAsyncAction(number, time)),
    }
}

// 使用connect()()创建并暴露一个Count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

