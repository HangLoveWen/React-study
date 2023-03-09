import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
export default class App extends Component {
  state={
    //users初始值为数组
    users:[],
    isFirst:true,//是否为第一次打开页面
    isloading:false,//标识是否处于加载中
    err:''//存储请求想关的错误信息
  }//初始化状态，
  //更新App的state
 updateAppState=(stateObj)=>{
    this.setState({stateObj})
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state}  />
  </div>
    )
  }
}
