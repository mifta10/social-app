import React, {useState,useEffect} from 'react';
import Posts from '../Posts/Posts';


const AllPosts = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  console.log(post);
  return (
    <div>
      {
       
       post.map(post => <Posts post={post}></Posts>)    
        
      }
    </div>
  );
};

export default AllPosts;