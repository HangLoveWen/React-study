import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Detail() {
  // const [search]=useSearchParams()
  // const id=search.get('id')
  // const title=search.get('title')
  // const content=search.get('content')
  const {state:{id,title,content}}=useLocation()
  return (  
    <div>
      <ul>
        <li>id:{id}</li>
        <li>name:{title}</li>
        <li>context:{content}</li>
      </ul>
     
    </div>
  )
}
