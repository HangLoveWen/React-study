import React, { Component } from 'react'

export default class Add extends Component {
  state={value:0}
  increment=()=>{
    const {value}=this.state
    const {selected} =this
    this.setState({value:parseInt(selected.value)+value})
    // console.log(value,selected.value);
  }
  oncrement=()=>{
    const {value}=this.state
    const {selected} =this
    this.setState({value:value-parseInt(selected.value)})
    // console.log(value,selected);
  }
  odd=()=>{
    const {value}=this.state
    const {selected} =this
    if((value+parseInt(selected.value))%2){
      this.setState({value:value+parseInt(selected.value)})
      // console.log((value+parseInt(selected.value)));
    }
  }
  async=()=>{
    setTimeout(()=>{
      this.increment()
    },2000)
  }
  render() {
    const {value} =this.state
    return (
      <div>
        <h2>click {value}  times</h2>&nbsp;
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
