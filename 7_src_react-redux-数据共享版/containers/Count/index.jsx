import React, { Component } from 'react'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入action
import {
    createIncreamentAction,
    createDecreamentAction,
    createIncreamentAsyncAction
} from '../../redux/actions/count'

// 定义UI组件
class Count extends Component {

    incremnet = () => {
        const { value } = this.selectNumber
        this.props.jia(value * 1)
    }
    decremnet = () => {
        const { value } = this.selectNumber
        this.props.jian(value * 1)
    }
    incremnetIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }
    incremnetAsync = () => {
        const { value } = this.selectNumber
        this.props.jiaAsync(value * 1, 500)
    }

    render() {
        // console.log('UI组件的props', this.props)
        return (
            <div>
                <h2>我是Count组件， Person组件总人数为：{this.props.renshu}</h2>
                <h4>当前求和为：{this.props.count}</h4>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.incremnet}>+</button>&nbsp;
                <button onClick={this.decremnet}>-</button>&nbsp;
                <button onClick={this.incremnetIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incremnetAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}


// 映射状态
// const mapStateToProps = state => ({ count: state })

// 映射操作状态的方法
/* const mapDispatchToProps = dispatch => (
    {
        // 通知redux执行加法
        jia: number => dispatch(createIncreamentAction(number)),
        jian: number => dispatch(createDecreamentAction(number)),
        jiaAsync: (number, time) => dispatch(createIncreamentAsyncAction(number, time)),
    }
) */

// 使用connect()()创建并暴露一个Count容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
export default connect(
    state => ({ count: state.count, renshu: state.persons.length }),

    // mapDispatchToProps的一般写法--->传函数
    /* dispatch => ({
        // 通知redux执行加法
        jia: number => dispatch(createIncreamentAction(number)),
        jian: number => dispatch(createDecreamentAction(number)),
        jiaAsync: (number, time) => dispatch(createIncreamentAsyncAction(number, time)),
    }) */

    // mapDispatchToProps的简写--->传一般对象
    {
        jia: createIncreamentAction,
        jian: createDecreamentAction,
        jiaAsync: createIncreamentAsyncAction,
    }
)(Count)

