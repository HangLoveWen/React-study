import React, { Component } from 'react'

const Detaildata=[
  {id:'01',content:'你好，中国'},
  {id:'02',content:'你好，尚硅谷'},
  {id:'03',content:'你好，未来的自己'},
]
export default class Detial extends Component {
  render() {
    const {id,title}=this.props.match.params
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
