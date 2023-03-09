import React, { Component } from 'react'
import store from '../../redux/store'
export default class Add extends Component {
  componentDidMount(){
    //检测redux中状态的变化，只要变化，就调用render
    store.subscribe(()=>{
      this.setState({})
    })
  }
  state={carname:'奔驰'}
  increment=()=>{
    const {value}=this.selected
    store.dispatch({type:'increment',data:value*1})
    // console.log(value,selected.value);
  }
  oncrement=()=>{
    const {value}=this.selected
    store.dispatch({type:'decrement',data:value*1})
    // console.log(value,selected);
  }
  odd=()=>{
    const {value}=this.selected
    const count =store.getState()
    if(count%2){
      store.dispatch({type:'increment',data:value*1})
      // console.log((value+parseInt(selected.value)));
    }
  }
  async=()=>{
    setTimeout(()=>{
      this.increment()
    },2000)
  }
  render() {
    return (
      <div>
        <h2>click {store.getState()}  times</h2>&nbsp;
        <select name="" ref={c=>{this.selected=c}} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;&nbsp;
          <button onClick={this.oncrement}>-</button>&nbsp;&nbsp;
          <button onClick={this.odd}>当前和为奇数再加</button>&nbsp;&nbsp;
          <button onClick={this.async}>异步加</button>&nbsp;&nbsp;
      </div>
    )
  }
}
