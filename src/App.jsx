import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AppNavbar from "./components/Navbar/AppNavbar";
import Footer from "./components/footer/Footer";

import Products from "./components/Products/Products";
import Search from "./components/SearchBox/Search";

// function App() {
//   return (
//     <>
//       <Search />
//       <Products />

//     </>
//   )
// }

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
