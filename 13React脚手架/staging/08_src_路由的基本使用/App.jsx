import React, { Component } from 'react'
import About from './components/About'
import Home from './components/Home'
import {  Link,Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 原生靠a标签跳转,react中靠路由链接跳转 */}
            {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}
            <Link className="list-group-item" to="/about">About</Link>
            <Link className="list-group-item active" to="/home">Home</Link>
          </div>
        </div>
        {/* 注册路由 */}
        <div className="col-xs-6">
      <div className="panel">
        <div className="panel-body">
          <Route path='/about' component={About} />
          <Route path='/home' component={Home} />  
        </div>
      </div>
    </div>
      </div>

    </div>
    )
  }
}
