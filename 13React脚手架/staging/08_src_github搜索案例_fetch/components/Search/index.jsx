import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
  search=async()=>{
   
    // 获取用户的输入(连续解构赋值+重命名)
    const {keywordElement:{value:keyWord}}=this
    // 发送前通知APP更新状态
    // this.props.updateAppState({isFirst:false,isLoading:true})
    PubSub.publish('atguigu',{isFirst:false,isLoading:true})
    // 发送网络请求
    // fetch(`/api1/search/users?q=${keyWord}`).then(
    //   response=>{
    //     // 请求成功后通知List更新状态
    //     // this.props.updateAppState({isLoading:false,users:response.data.items})
    //     PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
    //     },
    //           error=>{
    //     // 请求失败后通知List更新状态
    //     // this.props.updateAppState({isLoading:false,err:error.message})
    //     PubSub.publish('atguigu',{isLoading:false,err:error.message})
    //   }
    // )
    try {
      const response=await fetch(`/api1/search/users?q=${keyWord}`)
      const result= await response.json()
      PubSub.publish('atguigu',{isLoading:false,users:result.items})
        } catch (error) {
            // console.log('请求出错',error);
            PubSub.publish('atguigu',{isLoading:false,err:error.message})
    }
   

    // console.log(this.props);
  }
  render() {
    return (
      <section className="jumbotron">
      <h3 className="jumbotron-heading">搜索github用户</h3>
      <div>
        <input ref={c=>this.keywordElement=c} type="text" placeholder="输入关键字点击搜索"/>&nbsp;
        <button onClick={this.search}>搜索</button>
      </div>
    </section>
    )
  }
}
