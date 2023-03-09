import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default class App extends Component {
  //状态在哪里，操作状态的方法就在那里
  state={todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打代码',done:false},
    {id:'004',name:'玩游戏',done:false}
  ]}
  //addTodo用于添加一个todo，接受的对象是todo对象
  addTodo=(todoObj)=>{
    //获取原todo
    const {todos}=this.state
    //追加一个todo
    const newTodos=[todoObj,...todos]
    this.setState({todos:newTodos})
  }
  //updateTodo用于更新一个todo对象
  updateTodo=(id,done)=>{
    const {todos}=this.state
    //匹配处理数据
    const newTodos=todos.map((todoObj)=>{
      if(todoObj.id===id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }
  //deletetodo用于更新删除一个todo对象
  deleteTodo=(id)=>{
    //获取原来的todo
    const {todos}=this.state
    const newTodos=todos.filter((todoObj)=>{
      return todoObj.id!==id
    })
    this.setState({todos:newTodos})
  }
  //全选
  checkAllTodo=(done)=>{
    //获取原来的数据
    const {todos}=this.state
    //加工数据
    const newTodos=todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    //更新状态
    this.setState({todos:newTodos})
  }
  //清除所有已完成的
  clearAllDone=()=>{
    //获取原来的todos
    const{todos}=this.state
    const newTodos=todos.filter((todoObj)=>{
      return !todoObj.done
    })
    //更新状态
    this.setState({todos:newTodos})
  }
  render() {
    const{todos}=this.state
    return (
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
          </div>
        </div>
    )
  }
}
