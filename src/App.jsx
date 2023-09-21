
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AppNavbar from "./components/Navbar/AppNavbar";
import Footer from "./components/footer/Footer";

import Products from "./components/Products/Products";
import Search from "./components/SearchBox/Search";



import { RouterProvider, createBrowserRouter } from "react-router-dom";

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import AppNavbar from './components/Navbar/AppNavbar';
import Footer from './components/footer/Footer';


import Products from "./components/Products/Products";
import Search from "./components/SearchBox/Search";
import Main from "./layouts/Main";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Products></Products>
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

    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppNavbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
