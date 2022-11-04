import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Orders from "../../pages/orders/Orders";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Checkout from "../../pages/Checkout/Checkout";
import SignUp from "../../pages/SignUp/SignUp";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>, 
    children: [
      {
          path: '/',
          element: <Home></Home>
      },
      {
        path: '/login', 
        element: <Login></Login>
      },
      {
        path: '/signup', 
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/orders',
        element: <Orders></Orders>
      }
    ]
  }
]);