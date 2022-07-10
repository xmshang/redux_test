import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPerson } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        console.log(personObj)
        this.props.jiaYiRen(personObj)
        this.nameNode.value=''
        this.ageNode.value=''
    }

    render() {
        // const {id, name, age} = this.props
        return (
            <div>
                <h2>我是Person组件, Count组件和为：{this.props.sum}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder='输入名字' />
                <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.yiduiren.map((personObj) => {
                            return <li key={personObj.id}>{personObj.name}--- {personObj.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ yiduiren: state.persons, sum: state.count }), // 映射状态
    { jiaYiRen: createAddPerson }
)(Person)
