import React, { useEffect, useState } from 'react'; 
import Post from './Post';

const Media = () => { 

    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[]) 

    return (
        <div className='lg:w-2/5 mx-auto md:w-3/5 w-11/12'>
           {
             posts.map(post => <Post key={post._id} post={post}/>)
           }
        </div>
    )
}



export default Media;