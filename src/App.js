import React from 'react'
import Blog from './components/Blog'
import Navbar from './components/Navbar'
import blogData from './blogData'

const App = () => {

    const blogInfo = blogData.map((info) => {
        return <Blog 
                key = {info.id}
                {...info}
                />
    })
  
  return (
    <div className='container'>
        <Navbar />
        {blogInfo}
        
    </div>
  )
}

export default App