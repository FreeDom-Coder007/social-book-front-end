import { RouterProvider } from 'react-router'; 
import './App.css';
import router from './router/router';

function App() {
  return (
    <section className='lg:max-w-[1333px] mx-auto'>
      <RouterProvider router={router} /> 
    </section>
  )
}

export default App;
