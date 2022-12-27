import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100">
         <div className="navbar-start">
          <div className="dropdown">
           <label tabIndex={0} className="btn btn-ghost lg:hidden">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
           </label>
           <ul tabIndex={0} className="menu menu-compact font-medium dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             <li><Link>Media</Link></li>
             <li><Link>Message</Link></li>
             <li><Link>About</Link></li>
           </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl"><img className='w-10' src="https://www.svgrepo.com/show/437508/bolt.svg" alt="logo"/><span className='font-extrabold'>Social Book</span></Link>
         </div>
         <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
           <li><Link>Media</Link></li>
           <li><Link>Message</Link></li>
           <li><Link>About</Link></li>
          </ul>
         </div>
         <div className="navbar-end">
          <Link>
          <div className="avatar online">
           <div className="w-10 rounded-full">
             <img src={`https://placeimg.com/192/192/people`} alt="user"/>
           </div>
          </div>
          </Link>
         </div>
        </nav>
    )
}

export default Navbar;