import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default class App extends Component {
  state={todos:[    
  {id:'001',name:'吃饭',done:false},
  {id:'002',name:'睡觉',done:true},
  {id:'003',name:'打游戏',done:false},
  {id:'004',name:'看电视',done:true}]
  }
  //添加新的一项
  addTodo=(todoObj)=>{
    //获取原数据
    const {todos}=this.state
    //将数据添加，更新
    this.setState({todos:[todoObj,...todos]})
  }
  //删除
  deleteTodo=(id)=>{
      //获取原数据
      const {todos}=this.state
      const newTodo=todos.filter((todoObj)=>{
        return todoObj.id!==id
      })
      this.setState({todos:newTodo})
  }
  //更新
  updateTodo=(id,value)=>{
    const {todos}=this.state
    const newTodo=todos.map((todoObj)=>{
      if(todoObj.id===id){
       return {...todoObj,done:value}
      }else{
        return todoObj
      }
    })
    this.setState({todos:newTodo})
  }
  //全选
  checkAllTodo=(done)=>{
    const {todos}=this.state
      const newTodo=todos.map((todoObj)=>{
        return {...todoObj,done}
    })
    this.setState({todos:newTodo})
  }
  //清除已完成
  clearAllTodo=()=>{
    const {todos}=this.state
    const newTodo=todos.filter((todoObj)=>{
      return todoObj.done!==true
    })
    this.setState({todos:newTodo})
  }
    render() {
    const {todos}=this.state
    return (
      <div className="todo-container">
    <div className="todo-wrap">
      <Header addTodo={this.addTodo} />
      <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
      <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllTodo={this.clearAllTodo}/>
    </div>
  </div>
    )
  }
}
