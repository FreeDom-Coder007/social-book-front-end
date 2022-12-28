import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import { FaPhotoVideo } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';


const Home = () => {
    const {user} = useContext(AuthContext)
    const {register, handleSubmit} = useForm()


    const handlePost = (data) => { 
        const imageURL = data.photo[0]
        const formData = new FormData()
        formData.append("image", imageURL) 

        const imgbbApiKey = `55313d2f9a6381719d51e414cdac62c9`
        fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,{
            method: 'POST',
            body: formData 
        })
        .then(res => res.json())
        .then(imageFile => {
            console.log(imageFile)
            const image = imageFile.data.url 
            if(imageFile.success){

                const status = data.status
                const photo = image
                const post = {status, photo} 

                fetch('http://localhost:5000/post', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(post)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                       toast.success('Uploaded a post') 
                    }
                }) 
            }
        }) 

    }

    return (
        <React.Fragment>
        <div className='bg-slate-300 flex items-center justify-evenly gap-x-3 px-11 my-5 rounded-lg lg:w-2/5 mx-auto md:w-3/5 w-11/12'>
          <div className="avatar placeholder py-3">
           <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
             <img src={user?.photoURL} alt="user"/>
           </div>
          </div>
          <label htmlFor="my-modal-3" className="btn text-left bg-slate-100 hover:bg-slate-200 text-gray-600 border-none w-full rounded-lg">What's on your mind, {user?.displayName}?</label> 
        </div> 

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
         <div className="modal-box relative  bg-slate-300">
           <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
           <h3 className="text-2xl text-center font-bold">Create Post</h3>
           <div className="divider bg-black h-[1px]"></div> 
           <div>
             <div className="avatar placeholder py-3 flex items-center gap-x-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <img src={user?.photoURL} alt="user"/>
              </div>
              <h2 className='text-xl font-semibold'>{user?.displayName}</h2>
             </div>

             <form onSubmit={handleSubmit(handlePost)}>
               <div>
                <textarea {...register("status")} className="textarea w-full bg-slate-300 text-gray-600 font-medium text-2xl placeholder:text-gray-500 placeholder:font-medium" placeholder={`What's on your mind, ${user?.displayName}?`}></textarea>
               </div>
               <div className='border border-gray-800 rounded-lg'>
                <label className="label rounded-lg text-white bg-slate-300 text-center">
                 <input {...register("photo")} type="file" className="w-full hidden"/>
                 <p className='mx-auto flex items-center'><FaPhotoVideo className='text-gray-700 mr-2'/>Add photo on your post</p>
                </label>
               </div>
               <div className='mt-3'>
                <button type='submit' className='btn bg-gray-800 w-full'>Post</button>
               </div>
             </form>

           </div>
         </div>
        </div>
        </React.Fragment>
    )
}

export default Home;