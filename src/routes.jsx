import Home from './pages/Home/Home.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Shop from './pages/Shop/Shop.jsx'

const routes = [
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
];

export default routes;