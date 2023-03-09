import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  getStudentDate=()=>{
    axios.get('http://localhost:3000/student').then(
      Response=>{console.log('成功了',Response.data);},
      error=>{console.log('失败了',error);}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentDate}>点我获取学生数据</button>
      </div>
    )
  }
}
