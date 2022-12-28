import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';

const Comment = ({comment}) => {
    const {user} = useContext(AuthContext)
    console.log(comment)

    return (
        <div className='flex gap-x-2 p-2 bg-slate-300'>
           <div className="avatar">
             <div className="w-12 rounded-full">
              <img src={user?.photoURL} alt='user'/>
             </div>
           </div>
           <div>
             <h1>{user?.displayName}</h1>
             <p>{comment?.data}</p> 
           </div>
        </div>
    )
}

export default Comment;