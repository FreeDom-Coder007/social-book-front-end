import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Authentication/AuthProvider';
import Comment from './Comment';

const DetailsPage = () => {
    const {user} = useContext(AuthContext)
    const postData = useLoaderData()
    const {status, } = postData
    console.log(postData) 

    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    return (
        <div className='my-4 p-3 rounded-md lg:w-2/5 mx-auto md:w-3/5 w-11/12'>
          <h1 className='text-2xl font-semibold'>Post Details</h1>  
          <div className="avatar flex items-center gap-x-2 placeholder py-3">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
             <img src={user?.photoURL} alt="user"/>
            </div>
            <div><h1 className='text-lg font-medium'>{user?.displayName}</h1></div> 
           </div>
           <div className='mb-2'><p>{status}</p></div>
           <div><img src={postData?.photo} alt="user"/></div>
           <div>
             <h1 className='text-lg font-medium mt-2'>Comments</h1>
             <div className='divider bg-black h-[0.5px]'></div>
             <div>
                {
                   comments.map(comment => <Comment key={comment._id} comment={comment}/>) 
                }
             </div>
           </div> 
        </div>
    )
}

export default DetailsPage;