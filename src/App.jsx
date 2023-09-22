import React from "react";
import Products from "./components/Products/Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path: '/menu',
          element: <Products></Products>
        },
        {
          path: '*',
          element: <NotFound></NotFound>
        },
        {
          path: 'details/:detailsId',
          loader: async ({ params }) => {
            console.log(params.detailsId);
            return fetch(`https://backend-resturent-team-a.onrender.com/api/v1/food/${params.detailsId}`)
          },
          element: <DetailsProduct></DetailsProduct>
        }
      ]
    }

  ])


  return (

      <RouterProvider router={router}></RouterProvider>

  )
}

export default App;

