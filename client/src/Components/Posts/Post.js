import React from 'react'
import { useSelector } from 'react-redux'

const Post = () => {
  const posts = useSelector( (state)=>state.posts)
  console.log(posts)
    return (
        <div>
          
          <h1>This is  Post</h1> 
          <h1>This is  Post</h1> 
          <h1>This is  Post</h1>  
        </div>
    )
}

export default Post
