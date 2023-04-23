import React from 'react' 

const Blog = (props) => {
  return (
    <div className='blog--container'>
        <img src={props.img} className='blog--image' />
        
        <div className='blog-details'>
            <span className='blog--location'>{props.location}</span>
            <h2 className='blog--title'>{props.title}</h2>
            <span className='blog--date'>{props.date}</span>
            <p className='blog--description'>{props.description}</p>
        </div>
    </div>
  )
}

export default Blog