import React, { Component } from 'react'
import './index.css'
import { nanoid } from 'nanoid'
export default class Header extends Component {
  //添加xindetodo
  handlerAddTodo=(e)=>{
     const {target,keyCode}=e
     if(keyCode!==13) return
    //  console.log(target.value);
    if(e.target.value.trim()!==''){
      this.props.addTodo({id:nanoid(),name:target.value,done:false})
    }
  }
  render() {
    return (
      <div className="todo-header">
      <input onKeyUp={this.handlerAddTodo} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
    )
  }
}
