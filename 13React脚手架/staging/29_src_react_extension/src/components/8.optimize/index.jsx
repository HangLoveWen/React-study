import React, { PureComponent } from 'react'
import './index.css'
// const carcontext=React.createContext()
// const {Provider,consumer}=carcontext
export default class Parent extends PureComponent {
  
  state={carname:'奔驰成6'}
  changeCar=()=>{
    this.setState({carname:'迈巴赫',stus:['小张','小刘','小王']})
  }
  add=()=>{
    const {stus}=this.state
    this.setState({stus:['小文',...stus]})
  }
  render() {
    const {carname}=this.state
    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        <button onClick={this.changeCar} >点我换车</button>
        <span>{this.state.stus} 我的车名字是:{carname}</span>
        <button onClick={this.add}>添加一个小文</button>
        {/* <Provider value={carname}> */}
        <Child carname="奥拓"/>
        {/* </Provider> */}
      </div>
    )
  }
}
class Child extends PureComponent {
  // static contextType=carcontext
  // shouldComponentUpdate(nextProps,nextState){
  //   return this.props.carname!==nextProps.carname
  // }
  render() {
    return (
      <div className='child'>
        <h3>我是Child组件</h3>
        <span>我接到的车名是:{this.props.carname}</span>
        {/* <Consumer>
          (value)=>{
            return (`<span>我的车名字是:${this.value}</span> `)
          }
        </Consumer> */}
      </div>
    )
  }
}
