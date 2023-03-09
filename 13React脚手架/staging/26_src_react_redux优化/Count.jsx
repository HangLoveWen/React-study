import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createIncrementAction } from '../25_src_react_redux的基本使用/redux/count_action_create'
class Count extends Component {
  Add=()=>{
    this.props.jiafa(1)
  }
  render() {
    return (
      <div>
        <h2>当前求和为：{this.props.he}</h2>
        <button onClick={this.Add}>点我+1</button>
      </div>
    )
  }
}
export default connect(
  //映射状态
  state =>({he:state}),
  //映射操作状态的方法
  {jiafa:createIncrementAction}
)(Count)

