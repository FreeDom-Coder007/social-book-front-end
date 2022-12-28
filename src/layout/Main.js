import React from 'react';
import { Outlet } from 'react-router'; 
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <main>
           <Navbar/>
           <Outlet/>  
        </main>
    )
}

export default Main;