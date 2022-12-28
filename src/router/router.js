import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoutesProtector from "./RoutesProtector";

const router = createBrowserRouter([
    {
       path: '/',
       element: <RoutesProtector><Main/></RoutesProtector>,
       children: [
          {
            path: '/',
            element: <Home/>
          }
       ] 
    },
    {
       path: '/signup',
       element: <SignUp/> 
    },
    {
       path: '/login',
       element: <Login/> 
    } 
])

export default router;