import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
export default class Header extends Component {
  //对接收的props进行：类型，必要性的限制
  static propTypes={
    addTodo:PropTypes.func.isRequired,
    name:PropTypes.string,
    done:PropTypes.bool
  }
  handelerKeyUp=(event)=>{
    const {keyCode,target}=event
    //解构赋值获取keyCode,target
    if(keyCode !==13) return
    //判断是否是回车按键
    //判断输入的值是否为空，不能输入空格
    if(target.value.trim()===''){
      alert('输入不能为空')
      return
    }
    // console.log(target.value,keyCode);
    //准备好一个todo对象
    const todoObj={id:nanoid(),name:target.value,done:false}
    this.props.addTodo(todoObj)
    //清空输入
    target.value=''
}
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handelerKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
    )
  }
}
