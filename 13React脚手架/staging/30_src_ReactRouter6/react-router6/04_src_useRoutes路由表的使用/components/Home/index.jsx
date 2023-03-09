import React,{useState} from 'react'
import { Navigate } from 'react-router'
export default function Home() {
  const [count,addcount]=useState(0)
  return (
    <div>
        <h3>我是Home的内容</h3>
        {count===2?<Navigate to="/about" replace={false}/>:<h4>当前sum的值是：{count}</h4>}
        
        <button onClick={()=>addcount(count+1)}>点我+1</button>
    </div>
  )
}
