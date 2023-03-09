//引入Count的UI组件
import React,{Component} from 'react'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//使用connect()()创建并暴露一个Count的容器组件
import {Increment,Decrement,IncrementAsync} from '../../redux/actions/count'
//mapStateToProps函数的返回的对象中的key就作为传递给UI组件props的key，value作为传递给UI组件props的value--状态
//mapStateToProps用于传递状态
//mapDispatchToProps函数的返回的对象中的key就作为传递给UI组件props的key，value作为传递给UI组件props的value--操作状态的方法
//定义UI组件
class Add extends Component {
  state={carname:'奔驰'}
  increment=()=>{
    const {value}=this.count
   this.props.Increment(value*1)
  }
  decrement=()=>{
    const {value}=this.count
    this.props.Decrement(value*1)
  }
  odd=()=>{
    const {value}=this.count
    if(this.props.count%2!==0){
      this.props.Increment(value*1)
    }
  }
  aysnc=()=>{
    const {value}=this.count
    this.props.IncrementAsync(value*1,500)
  }
  render() {
    return (
      <div>
        <h2>我是Count组件</h2>
        <h2>当前和为：{this.props.count},下方组件总人数为：{this.props.personCount}</h2>&nbsp;&nbsp;
        <select name="" ref={(c)=>{this.count=c}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.odd}>当前和为奇数再加</button>&nbsp;&nbsp;
        <button onClick={this.aysnc}>等一会再加</button>&nbsp;&nbsp;
      </div>
    )
  }
}

export default connect(
  state =>({
    count:state.count,
    personCount:state.persons.length
  }),
//   dispatch =>({
//         //通知redux执行加法
//     jia:(number)=>dispatch(createIncrementAction(number)),
//     jian:(number)=>dispatch(createDecrementAction(number)),
//     jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
// })
//mapDispatchToProps的简写模式
{
  Increment,
  Decrement,
  IncrementAsync
}
)(Add)
