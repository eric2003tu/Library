import React, { useState,useEffect } from 'react';
function Posts() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);
  
    return (
      <center>
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>          
              <button type='button' className='like-button' onClick={function(){
            }}>Like</button>
            </li>
          ))}
        </ul>
      </div>
      </center>
    );
  }
 
  export default Posts;