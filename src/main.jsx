import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Shop from './pages/Shop/Shop.jsx'

const router = createBrowserRouter([
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
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
