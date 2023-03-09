import React, { Component } from 'react'
import store from '../../redux/store'
//引入actionCreater，专门用于创建action对象
import { createIncrementAction,createDecrementAction } from '../../redux/count_action_create'
export default class Add extends Component {
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }
  state={carname:'奔驰'}
  increment=()=>{
    const {value}=this.count
    store.dispatch(createIncrementAction(value*1))
  }
  decrement=()=>{
    const {value}=this.count
    store.dispatch(createDecrementAction(value*1))
  }
  odd=()=>{
    const {value}=this.count
    const count=store.getState()
    if(count%2!==0){
    store.dispatch(createIncrementAction(value*1))
    }
  }
  aysnc=()=>[
    setTimeout(()=>{
      this.increment()
    },2000)
  ]
  render() {
    return (
      <div>
        <h2>当前和为：{store.getState()}</h2>&nbsp;&nbsp;
        <select name="" ref={(c)=>{this.count=c}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.odd}>当前和为奇数再加</button>&nbsp;&nbsp;
        <button onClick={this.aysnc}>等一会再加</button>&nbsp;&nbsp;
      </div>
    )
  }
}
