import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Detail() {
  const [search,setSearch]=useSearchParams()
  const id=search.get('id')
  const title=search.get('title')
  const content=search.get('content')
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
