import React, { Component } from 'react'
// import qs from 'querystring-es3'
const Detaildata=[
  {id:'01',content:'你好，中国'},
  {id:'02',content:'你好，尚硅谷'},
  {id:'03',content:'你好，未来的自己'},
]
export default class Detial extends Component {
  render() {
    // 接收params参数
    // const {id,title}=this.props.match.params
    // 接收search参数
    // const {search}=this.props.location
    // const {id,title}=qs.parse(search.slice(1))
    // const findResult=Detaildata.find((result)=>{
    //         return result.id===id
    //   })
    // 接收state参数
     const {id,title}=this.props.location.state ||{}
    const findResult=Detaildata.find((result)=>{
            return result.id===id
      })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{findResult}</li>
      </ul>
    )
  }
}
