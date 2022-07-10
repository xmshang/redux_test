import React, { Component } from 'react'

export default class Count extends Component {

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
                <h1>当前求和为：{this.props.count}</h1>
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
