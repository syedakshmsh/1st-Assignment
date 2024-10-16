import Link from 'next/link'
import React from 'react'



function servicepage() {
  return (
    <div >
        <h1> my servicepage</h1> 
      <ul>
        <li><Link href="/service/web-development">This is WebDevelopment page</Link></li>
      
      </ul>
      
    </div>
  )
}

export default servicepage