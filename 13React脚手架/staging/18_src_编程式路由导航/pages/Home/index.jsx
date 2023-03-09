import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'
import { Route,Switch,Redirect } from 'react-router-dom'
export default class Home extends Component {
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
    const step=1
    return (
      <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to='/home/news'>News</MyNavLink>
          </li>
          <li>
          <MyNavLink to='/home/message'>Message</MyNavLink>
          </li>
        </ul>
        {/* 注册路由 */}
        <Switch>
        <Route path='/home/news' component={News} />
        <Route path='/home/message' component={Message} />
        <Redirect to='/home/news'></Redirect>
        </Switch>
      </div>
      <button onClick={this.backStep}>回退</button>&nbsp;
      <button onClick={this.forwardStep}>前进</button>
      <button onClick={this.go(step)}>前进{step}步</button>
      </div>
    )
  }
}
