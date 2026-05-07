import { useState } from "react"
import { CartContext } from "./context/CartContext"
import { RouterProvider, createBrowserRouter } from "react-router"
import routes from './routes'

function App() {
  const router = createBrowserRouter(routes)
  const [cart, setCart] = useState(['Первая покупка', 'Вторая покупка']);
  return (
      <CartContext value={cart}>
        <RouterProvider router={router} />
      </CartContext>
  )
}

export default App