import React, { Component } from 'react'
import './index.css'
//创建context对象
const UserNameContext=React.createContext()
const {Consumer,Provider}=UserNameContext
export default class A extends Component {
  state={username:'tom',age:18}
  render() {
    const {username,age}=this.state
    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>我的用户名是：{username}</h4>
        <Provider value={{username,age}}>
            <B username={username}/>
        </Provider>
      </div>
    )
  }
}
class B extends Component {
  // static contextType=UserNameContext
  render() {
    return (
      <div className='child'>
        <h3>我是B组件</h3>
        <h4>我从A组件接收到的用户名是：{this.props.username}</h4>
        <C />
      </div>
    )
  }
}
// class C extends Component {
//   static contextType=UserNameContext
//   render() {
//     const {username,age}=this.context
//     return (
//       <div className='grand'>
//         <h3>我是C组件</h3>
//         <h4>我从B组件接收到的用户名是：{username}</h4>
//         <h4>我从B组件接收到的用户年龄是：{age}</h4>
//       </div>
//     )
//   }
// }
function C(){
    return (
      <div className='grand'>
        <h3>我是C组件</h3>
        <Consumer>
          {
            value=>{
              return (
                <h4>我从A组件接收到的用户名是：{value.username},用户年龄是：{value.age}</h4>
              )
            }
          }
        </Consumer>
      </div>
    )
}


