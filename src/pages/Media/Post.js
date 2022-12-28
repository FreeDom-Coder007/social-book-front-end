import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg"; 
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { BsTelegram } from "react-icons/bs";
import { toast } from 'react-hot-toast';


const Post = ({post}) => {
    const {status, _id} = post
    const {user} = useContext(AuthContext) 

    const [reacted, setReacted] = useState(false)
    const handleReact = () => {
        setReacted(!reacted)
    }

    const [loveReacted, setLoveReacted] = useState(false)
    const handleLove = () => {
        setLoveReacted(!loveReacted)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const userImage = user?.photoURL
        const userName = user?.displayName
        const data = event.target.comment.value

        const comment = {userImage, userName, data}
        fetch(`http://localhost:5000/comment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
               toast.success('Comment added')  
            }
        })
    }

    return (
        <div className='my-4 p-3 rounded-md bg-slate-300'>
          <div className="avatar flex items-center gap-x-2 placeholder py-3">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
             <img src={user?.photoURL} alt="user"/>
            </div>
            <div><h1 className='text-lg font-medium'>{user?.displayName}</h1></div> 
           </div>
           <div className='mb-2'><p>{status}</p></div>
           <div><img src={post?.photo} alt="user"/></div>
           <div className='mt-1 flex items-center justify-around'>
             <button onClick={handleReact} className={`${reacted ? "btn bg-black text-white" : "btn btn-ghost"}`}><BiLike className="text-2xl"/></button>
             <button onClick={handleLove} className={`${loveReacted ? "btn bg-black text-white" : "btn btn-ghost"}`}><FcLike className='text-2xl'/></button>
             <label htmlFor="comment-modal" className='btn btn-ghost'><BiCommentDetail className='text-2xl'/></label> 
             <Link to={`/details-page/${_id}`} className='btn btn-ghost'><CgDetailsMore className='text-2xl'/></Link>
           </div> 

           {/* Put this part before </body> tag */}
           <input type="checkbox" id="comment-modal" className="modal-toggle" />
           <div className="modal">
            <div className="modal-box relative bg-slate-300">
             <label htmlFor="comment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
             <h3 className="text-lg mb-2 font-bold">Comment here</h3>
             <form onSubmit={handleSubmit} className='flex flex-row gap-x-2 items-center'>
               <textarea name='comment' rows="1" className="textarea w-full placeholder:text-lg font-medium" placeholder="Write a comment"></textarea>
               <button type='submit'><BsTelegram className='text-4xl'/></button>
             </form>
            </div>
           </div>
        </div>
    )

}

export default Post;