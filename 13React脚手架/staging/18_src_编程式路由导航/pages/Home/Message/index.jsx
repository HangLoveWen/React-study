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
  replaceShow=(id,title)=>{
    return ()=>{
          //编写一段代码+携带params参数，让其实现跳转到Detail组件，且为replace跳转
      this.props.history.replace(`home/meaasge/detail/${id}/${title}`)
      //编写一段代码+携带query参数，让其实现跳转到Detail组件，且为replace跳转
      // this.props.history.replace(`home/meaasge/detail?id=${id}&title=${title}`)
      //编写一段代码+携带state参数，让其实现跳转到Detail组件，且为replace跳转
      // this.props.history.replace(`home/meaasge/detail/{id:${id},title:${title}}`)

    }    
  }
  pushShow=(id,title)=>{
    return ()=>{
          //编写一段代码，让其实现跳转到Detail组件，且为replace跳转
      this.props.history.push(`home/meaasge/detail?id=${id}&title=${title}`)
          //编写一段代码+携带query参数，让其实现跳转到Detail组件，且为replace跳转
      // this.props.history.push(`home/meaasge/detail?id=${id}&title=${title}`)
      //编写一段代码+携带state参数，让其实现跳转到Detail组件，且为replace跳转
      // this.props.history.push(`home/meaasge/detail/{id:${id},title:${title}}`)
  }
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
                    {/* 向路由中组件传递携带params参数*/}
                  <Link to={`/home/message/detail/${msgobj.id}/${msgobj.title}`}>{msgobj.title}</Link> 
                    {/* 向路由中组件传递携带search参数 */}
                    {/* <Link to={`/home/message/detail/?id=${msgobj.id}&title=${msgobj.title}`}>{msgobj.title}</Link> */}
                    {/* 向路由中组件传递携带state参数 */}
                    {/* <Link to={{pathname:'home/message/detail',state:{id:msgobj.id,title:msgobj.title}}}>{msgobj.title}</Link> */}
                    <button onClick={this.pushShow(msgobj.id,msgobj.title)}>push查看</button>&nbsp;
                    <button onClick={this.replaceShow(msgobj.id,msgobj.title)}>replace查看</button>
                  </li>
                )
            })
          }
          </ul>
          <hr />
          {/* 声明接收params参数*/}
          <Route path="/home/message/detail/:id/:title" component={Detail} />
            {/* search参数无需声明接收,正常注册路由组件*/}
          {/* <Route path="/home/message/detail" component={Detail} />  */}
            {/* state参数无需声明接收,正常注册路由组件*/}
          {/* <Route path="/home/message/detail" component={Detail} />  */}
        </div>
    )
  }
}
