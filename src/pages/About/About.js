import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';

const About = () => {
    const {user} = useContext(AuthContext)

    return (
        <div className=' bg-slate-300 lg:w-4/5 mx-auto my-5 px-4 py-2'>
            <h1 className='text-2xl text-center mt-4 mb-6 font-bold'><button className=' btn btn-ghost'>Edit Profile</button></h1>
            <div className='divider'></div>
            <div className="avatar flex justify-center">
             <div className="w-32 rounded-full">
              <img src={user?.photoURL} alt='user'/>
             </div>
            </div>
            <div>
               <span>Name</span><input type="text" placeholder={user?.displayName} className="input w-full"/> 
            </div>
        </div>
    )
}

export default About;