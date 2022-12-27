import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <main>
           <Navbar/>
           <Outlet/>
           <Footer/> 
        </main>
    )
}

export default Main;