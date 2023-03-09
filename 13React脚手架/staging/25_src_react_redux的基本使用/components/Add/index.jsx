import React, { Component } from 'react'
export default class Add extends Component {
  state={carname:'奔驰'}
  increment=()=>{
    const {value}=this.count
   this.props.jia(value*1)
  }
  decrement=()=>{
    const {value}=this.count
    this.props.jian(value*1)
  }
  odd=()=>{
    const {value}=this.count
    if(this.props.count%2!==0){
      this.props.jia(value*1)
    }
  }
  aysnc=()=>{
    const {value}=this.count
    this.props.jiaAsync(value*1,500)
  }
  render() {
    return (
      <div>
        <h2>当前和为：{this.props.count}</h2>&nbsp;&nbsp;
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
