import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'
import Header from'./components/Header'//Header是一般组件,Home是路由组件
import { Route,Switch,Redirect } from 'react-router-dom'
import Test from './components/Test'
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
            <MyNavLink  to="/about" >About</MyNavLink>
            <MyNavLink  to="/home/a/b" >Home</MyNavLink>
          </div>
        </div>
        {/* 注册路由 */}
        <div className="col-xs-6">
      <div className="panel">
        <div className="panel-body">
          {/* exact开启严格匹配 */}
          <Switch>
          <Route path='/about' component={About} />
          <Route path='/home' component={Home} />  
          <Route path='/home' component={Test} />  
          <Redirect to='/about'></Redirect>
          {/* Redict代表重定向，全部路由无法匹配，由redirect决定 */}
          </Switch>
        </div>
      </div>
    </div>
      </div>

    </div>
    )
  }
}
