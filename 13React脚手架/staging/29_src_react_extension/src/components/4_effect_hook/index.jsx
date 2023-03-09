import React from 'react'
// import { ReactDOM } from 'react'
// import {createRoot} from 'react-dom/client'
import { root } from '../../index'
// export default class Demo extends React.Component {
//   state={count:0}
//   add=()=>{
//     this.setState(state=>({count:state.count+1}))
//   }
//   unmount=()=>{
//     ReactDOM.unmountComponentAtNode(document.getElementById("root"))
//   }
// componentDidMount(){
//   this.timer=setInterval(()=>{
//     this.setState(state=>({count:state.count+1}))
//   },1000)
// }
// componentWillUnmount(){
//   clearInterval(this.timer)
// }
//   render() {
//     return (
//       <div>
//         <h2>当前求和为：{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//       </div>
//     )
//   }
// }

function Demo() {
  const [count,setCount]=React.useState(0)
  React.useEffect(()=>{
    let timer=setInterval(()=>{
      setCount(count=>count+1)
    },1000)
    return ()=>{
      clearInterval(timer)
    }
  },[])
      function add(){
        // setCount(count+1)第一种写法
        setCount((count)=> count+1)
      }
      //卸载组建的回调
      function unmount(){
        // createRoot(document.querySelector('#root')).unmount();
        root.unmount()
      }
  return (
      <div>
        <h2>当前求和为：{count}</h2>
        <button onClick={add}>点我+1</button>
        <button onClick={unmount}>卸载组件</button>
      </div>
    )
}
export default Demo


