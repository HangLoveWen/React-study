import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Header from'./components/Header'//Header是一般组件,Home是路由组件
import { NavLink,Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 原生靠a标签跳转,react中靠路由链接跳转 */}
            {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}
            <NavLink className="list-group-item" to="/about">About</NavLink>
            <NavLink className="list-group-item" to="/home">Home</NavLink>
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
