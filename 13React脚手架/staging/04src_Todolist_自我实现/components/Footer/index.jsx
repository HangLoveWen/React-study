import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  handlerCheckAllTodo=(e)=>{
    this.props.checkAllTodo(e.target.checked)
  }
  handlerClearAll=(e)=>{
    this.props.clearAllTodo()
  }
  render() {
    const {todos}=this.props
    const doneCount=todos.reduce((pre,current)=>{
      return pre+(current.done?1:0)
    },0)
    return (
      <div className="todo-footer">
      <label>
        <input type="checkbox" onChange={this.handlerCheckAllTodo} checked={doneCount===todos.length&&todos.length!==0?true:false}/>
      </label>
      <span>
        <span>已完成{doneCount}</span> / 全部{todos.length}
      </span>
      <button onClick={this.handlerClearAll} className="btn btn-danger">清除已完成任务</button>
    </div>
    )
  }
}
