import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import DetailsPage from "../pages/Media/DetailsPage";
import Media from "../pages/Media/Media";
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
          },
          {
            path: '/media',
            element: <Media/>
          },
          {
            path: '/details-page/:id',
            loader: ({params}) => fetch(`http://localhost:5000/post/${params.id}`),
            element: <DetailsPage/>
          },
          {
            path: '/about',
            element: <About/>
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