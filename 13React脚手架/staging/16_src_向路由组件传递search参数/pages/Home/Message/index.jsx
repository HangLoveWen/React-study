import React, { Component } from 'react'
import Detail from './Detail'
import { Link,Route } from 'react-router-dom'
export default class Message extends Component {
  state={
    messageArr:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'},
    ]
  }
  render() {
    const{messageArr}=this.state
    return (
      <div>
          <ul>
            {
               messageArr.map((msgobj)=>{
                return (
                  <li key={msgobj.id}>
                    {/* 向路由中组件传递携带params参数
                    <Link to={`/home/message/detail/${msgobj.id}/${msgobj.title}`}>{msgobj.title}</Link> */}
                    {/* 向路由中组件传递携带search参数 */}
                    <Link to={`/home/message/detail/?id=${msgobj.id}&title=${msgobj.title}`}>{msgobj.title}</Link>
                  </li>
                )
            })
          }
          </ul>
          <hr />
          {/* 声明接收params参数
          <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
            {/* search参数无需声明接收,正常注册路由组件*/}
          <Route path="/home/message/detail" component={Detail} /> 
        </div>
    )
  }
}
