import Home from './pages/Home/Home.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Shop from './pages/Shop/Shop.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router'

const routes = [
  {
    path: "/",
    element: (
    <>
      <Navbar/>
      <Outlet/>
    </>
    ),
    errorElement: <ErrorPage/>,
    children : [
      {
        index: true, 
        element: <Home/>},
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/shop",
        element: <Shop/>,
      },
    ]
  },
];

export default routes;