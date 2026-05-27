import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import BasicLayout from './layouts/BasicLayout'
import Missing from './pages/missing/Missing'
import Shelter from './pages/Shelter/Shelter'


const router = createBrowserRouter([
  {
   path: '/',
   element: <BasicLayout/>,
   children: [
      { index:true, element: <Missing /> },
      { path: '/shelter', element: <Shelter /> }, 
   ]
  }
])


function App() {

  return ( 
    <RouterProvider router={router} />
  ); 
}

export default App
