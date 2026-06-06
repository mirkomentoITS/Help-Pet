import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import BasicLayout from './layouts/BasicLayout'
import Missing from './pages/missing/Missing'
import Shelter from './pages/shelter/Shelter'
import Animal from './pages/animal/Animal'
import NotFound from './pages/notfound/NotFound'


const router = createBrowserRouter([
  {
   path: '/',  element: <BasicLayout />,
   children: [
     {
      index: true,
      element: <Missing />
     },
     {
      path: '/shelter',
      element: <Shelter />
     },
     {
      path: '/shelter/:id',
      element: <Animal />
     }
   ]
  },
  {
   path: '*',
   element: <NotFound />
  }
])


function App() {

  return ( 
    <RouterProvider router={router} />
  ); 
}

export default App
