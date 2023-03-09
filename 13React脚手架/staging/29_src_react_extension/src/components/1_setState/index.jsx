import React, { Component } from 'react'

export default class Demo extends Component {
  add=()=>{
    // const {count}=this.state
    // this.setState({count:count+1},()=>{})
    //立马拿到更新胡后的值，需要使用回调
    this.setState(state=>({count:state.count+1}))
  }
  state={count:0}
  render() {
    return (
      <div>
       <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
        </div>
    )
  }
}
