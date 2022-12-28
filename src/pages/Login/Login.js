import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {loginUser} = useContext(AuthContext)
    const [firebaseError, setFirebaseError] = useState(null)

    const navigate = useNavigate()

    const handleLogin = (data) => {
        setFirebaseError(null) 

        loginUser(data.email, data.password)
        .then(result => {
           const user = result.user
           console.log(user)
           navigate('/')
        })
        .catch(error => {
            setFirebaseError(error.message)
            console.log(error.message) 
        })
    }

    return (
        <section className="bg-gray-50">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
           <Link className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
             <img className="w-8 h-8 mr-2" src="https://www.svgrepo.com/show/437508/bolt.svg" alt="logo"/>
             <span className='text-black font-bold'>Social Book</span>   
           </Link>
           <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-200 dark:border-gray-300">
             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Please Login
              </h1>
              <form onSubmit={handleSubmit(handleLogin)} className="space-y-4 md:space-y-6"> 
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                      <input {...register("email", {required: "Email is required"})} type="email" className="bg-slate-200 border border-gray-300 text-gray-900 dark:text-gray-900 dark:placeholder-gray-400 placeholder:font-medium sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email"/>
                      {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input {...register("password", {required: "Password is required"})} type="password" name="password" className="bg-slate-200 border border-gray-300 text-gray-900 dark:text-gray-900 dark:placeholder-gray-400 placeholder:font-medium sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Password"/>
                      {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                  </div>
                  {firebaseError && <p className='text-red-500 font-medium'>{firebaseError}</p>}
                  <input type="submit" value="login" className="w-full btn bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"/>
                  <p className="text-sm text-center font-light text-gray-500 dark:text-gray-900"> 
                    <span>Don’t have an account yet?</span> <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create Account</Link>
                  </p>
              </form>
             </div>
           </div>
          </div>
        </section>
    );
};

export default Login;