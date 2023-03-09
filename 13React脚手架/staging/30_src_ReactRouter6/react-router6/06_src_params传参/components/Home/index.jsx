import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
export default function Home() {
  // const [count,addcount]=useState(0)
  return (
    <div>
        <h3>我是Home的内容</h3>
        {/* {count===2?<Navigate to="/about" replace={false}/>:<h4>当前sum的值是：{count}</h4>}
        <button onClick={()=>addcount(count+1)}>点我+1</button> */}
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item " to="news">News</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item " to="message">Message</NavLink>
            </li>
          </ul>
          {/* 指定路由组件呈现的位置 */}
          <Outlet />
        </div>
    </div>
  )
}
