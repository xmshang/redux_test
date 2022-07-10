import React, { Component } from 'react'
// 引入store,用于获取redux中保存的状态
import store from '../../redux/store'
// 引入ActonCreator，专门用于创建action对象
import {createIncreamentAction, createDecreamentAction} from '../../redux/count_action'

export default class Count extends Component {

    /* componentDidMount() {
        // 监测redux中状态变化，只要变化，调用render
        store.subscribe(() => {
            this.setState({})
        })
    } */

    incremnet = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncreamentAction(value * 1))
    }
    decremnet = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecreamentAction(value * 1))
    }
    incremnetIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(store.dispatch(createIncreamentAction(value * 1)))
        }

    }
    incremnetAsync = () => {
        setTimeout(() => {
            const { value } = this.selectNumber
            store.dispatch(store.dispatch(createIncreamentAction(value * 1)))
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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
