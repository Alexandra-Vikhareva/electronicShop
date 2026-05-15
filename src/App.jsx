import { useEffect, useState } from "react"
import { CartContext } from "./context/CartContext"
import { RouterProvider, createHashRouter } from "react-router"
import routes from './routes'

function App() {
  const router = createHashRouter(routes)
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(newItem) {
    if (newItem.quantity !== 0) {
      const exist = cart.some(cartItem => cartItem.product == newItem.product);
      if (exist) {
        const newCart = cart.map(cartItem => cartItem.product === newItem.product ? newItem : cartItem);
        setCart(newCart);
      } else {
        const newCart = [...cart.filter(cartItem => cartItem.product !== newItem.product), newItem];
        setCart(newCart);
      }
      
    } else {
      const newCart = [...cart.filter(cartItem => cartItem.product !== newItem.product)];
      setCart(newCart)
    }
  }

  return (
      <CartContext value={{cart, addToCart}}>
        <RouterProvider router={router} />
      </CartContext>
  )
}

export default App