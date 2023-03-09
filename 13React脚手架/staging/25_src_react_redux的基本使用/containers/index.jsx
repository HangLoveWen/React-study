//引入Count的UI组件
import CountUI from '../components/Add'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//使用connect()()创建并暴露一个Count的容器组件
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../redux/count_action_create'
//mapStateToProps函数的返回的对象中的key就作为传递给UI组件props的key，value作为传递给UI组件props的value--状态
//mapStateToProps用于传递状态
const mapStateToProps=(state)=>{
  return {count:state}
}
//mapDispatchToProps函数的返回的对象中的key就作为传递给UI组件props的key，value作为传递给UI组件props的value--操作状态的方法
const mapDispatchToProps=(dispatch)=>{
  return {
        //通知redux执行加法
    jia:(number)=>dispatch(createIncrementAction(number)),
    jian:(number)=>dispatch(createDecrementAction(number)),
    jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
}
}
const CountContainer=connect(mapStateToProps,mapDispatchToProps)(CountUI)
export default CountContainer
