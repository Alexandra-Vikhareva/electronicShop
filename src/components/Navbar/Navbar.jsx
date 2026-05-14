import useCart from "../../hooks/useCart";
import { Link } from "react-router";

export default function Navbar() {
    const { cart } = useCart()
    let totalQuantity = cart.reduce(
                        (res, item) => res + item.quantity
                        , 0);

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
            <span>{totalQuantity > 0 
                        ? totalQuantity 
                        : ''}
            </span>
        </nav>
    )
}