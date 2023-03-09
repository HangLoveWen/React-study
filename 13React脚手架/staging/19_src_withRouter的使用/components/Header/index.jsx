import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
 class Header extends Component {
  backStep=()=>{
    this.props.history.goBack()
  }
  forwardStep=()=>{
    this.props.history.goForward()
  }
  go=(step)=>{
    return ()=>{
      this.props.history.go(step)
    }
  }
  render() {
    const step=2
    return (
      <div className="page-header"><h2>React Router Demo</h2>
      <button onClick={this.backStep}>回退</button>&nbsp;
      <button onClick={this.forwardStep}>前进</button>
      <button onClick={this.go(step)}>前进{step}步</button>
      </div>

    )
  }
}
export default withRouter(Header)
//withRouter 可以加工一些组件，让一般组件具备路由组件所特有的API
//withRouter的返回值是一个新组件
