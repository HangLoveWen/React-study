import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state={mouse:false}
  //鼠标移进移除
  handlerMouse=(flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  //删除
  handlerDeleteTodo=(id)=>{
    return ()=>{
      if(window.confirm('你确定要删除吗？')){
        this.props.deleteTodo(id)
      }
    }
  }
  //更新
  handlerUpdateTodo=(id)=>{
    return (e)=>{
      this.props.updateTodo(id,e.target.checked)
    }
  }
  render() {
    const {id,name,done}=this.props
    const {mouse}=this.state
    return (
        <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handlerMouse(true)} onMouseLeave={this.handlerMouse(false)} >
          <label>
            <input type="checkbox" onChange={this.handlerUpdateTodo(id)} checked={done}/>
            <span>{name}</span>
          </label>
          <button onClick={this.handlerDeleteTodo(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>

    )
  }
}
