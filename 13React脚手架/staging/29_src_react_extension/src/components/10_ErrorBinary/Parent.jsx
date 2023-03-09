import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
  state={
    hasError:''
  }
  //当Parent的子组件出现报错的时候，会触发getDerivedStateFromError调用，并携带错误信息
  static getDerivedStateFromError(error){
    return {hasError:error}
  }
  componentDidCatch(){
    console.log('统计错误，反馈给服务器');
  }
  render() {
    return (
      <div>
        <h2>
        我是Parent组件
        </h2>
        {
          this.state.hasError?<h2>当前网络不稳定，请稍后再试</h2>:<Child />
        }
        <Child />
      </div>
    )
  }
}