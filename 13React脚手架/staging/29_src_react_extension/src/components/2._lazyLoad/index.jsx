import React, { Component,lazy, Suspense } from 'react'
import { Route,NavLink } from 'react-router-dom'
// import About from './About'
// import Home from './Home'
import Loading from './Loading'
const About=lazy(()=>import('./About'))
const Home=lazy(()=>import('./Home'))
export default class Demo extends Component {
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
            <NavLink className="list-group-item" to="/about">About</NavLink>
            <NavLink className="list-group-item active" to="/home">Home</NavLink>
          </div>
        </div>
        {/* 注册路由 */}
        <div className="col-xs-6">
      <div className="panel">
        <div className="panel-body">
          <Suspense fallback={<Loading />} >
          <Route path='/about' component={About} />
          <Route path='/home' component={Home} />  
          </Suspense>
        </div>
      </div>
    </div>
      </div>

    </div>
    )
  }
}
