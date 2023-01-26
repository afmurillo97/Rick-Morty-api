import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home';

import React from 'react'
import Characters from './components/Characters';

const Layout = () => {
  return (
    <div className='font-press-start'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/characters',
        element: <Characters/>
      },
      {
        path:'/episode/',
        element: <Home/>
      },
      {
        path:'/location/',
        element: <Home/>
      },
    ]
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
