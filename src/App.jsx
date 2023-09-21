import { RouterProvider, createBrowserRouter } from "react-router-dom";
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

export default App;
