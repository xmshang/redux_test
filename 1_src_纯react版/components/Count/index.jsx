import React, { Component } from 'react'

export default class Count extends Component {


    state = {
        count: 0
    }

    incremnet = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count: count + value * 1})
    }
    decremnet = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count: count - value * 1})
    }
    incremnetIfOdd = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        if (count % 2 !== 0) {
            this.setState({count: count + value * 1})
        }
        // this.setState({count: count % 2 !== 0 ? count + value * 1 : count})
    }
    incremnetAsync = () => {
        setTimeout(() => {
            const {value} = this.selectNumber
            const {count} = this.state   
            this.setState({count: count + value * 1})    
        }, 5000)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
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
