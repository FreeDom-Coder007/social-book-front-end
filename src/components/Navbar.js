import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import { MdOutlinePermMedia } from "react-icons/md";
import { AuthContext } from '../Authentication/AuthProvider';

const Navbar = () => {
   const {logOutUser, user} = useContext(AuthContext) 

   const handleLogout = () => { 
     logOutUser()
     .then(() => {})
     .catch(error => console.log(error.message))
   }

    return (
        <nav className="navbar bg-slate-200">
         <div className="navbar-start">
          <div className="dropdown">
           <label tabIndex={0} className="btn btn-ghost lg:hidden">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
           </label>
           <ul tabIndex={0} className="menu menu-compact font-medium dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             <li><Link to="/media">Media</Link></li>
             <li><Link>Message</Link></li>
             <li><Link to="/about">About</Link></li> 
           </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-10' src="https://www.svgrepo.com/show/437508/bolt.svg" alt="logo"/><span className='font-extrabold'>Social Book</span></Link>
         </div>
         <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
           <li><Link to="/media">Media</Link></li>
           <li><Link>Message</Link></li>
           <li><Link to="/about">About</Link></li>
          </ul>
         </div>
         <div className="navbar-end"> 
           <div className="dropdown">
            <label tabIndex={0} className=" btn btn-ghost border-none focus:border ">
            <div className="avatar w-10 rounded-full">
              <img className='rounded-full' src={ user ? user.photoURL : `https://www.svgrepo.com/show/446114/user-profile-circle.svg`} alt={user?.displayName}/>
            </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact font-medium dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             <li><Link to="/media"><MdOutlinePermMedia/>Media</Link></li>
             <li><Link><BiMessageAltDetail/>Message</Link></li>
             <li><Link to="/about"><AiOutlineInfoCircle/>About</Link></li>
             <li><button onClick={handleLogout}><IoMdLogOut/>Log out</button></li>
           </ul> 
           </div> 
         </div>
        </nav>
    )
}

export default Navbar;