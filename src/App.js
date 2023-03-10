import { RouterProvider } from 'react-router'; 
import './App.css';
import router from './router/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <section className='lg:max-w-[1333px] mx-auto'>
      <RouterProvider router={router} />
      <Toaster/> 
    </section>
  )
}

export default App;
