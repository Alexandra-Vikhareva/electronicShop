import useCart from "../../hooks/useCart";
import { Link } from "react-router";
import styles from './Navbar.module.css'

export default function Navbar() {
    const { cart } = useCart()
    let totalQuantity = cart.reduce(
                        (res, item) => res + item.quantity
                        , 0);

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>Home</Link>
            <div className={styles.navLinks}> 
                <Link to="/shop" className={styles.link}>Shop</Link>
                <Link to="/cart" className={styles.cartLink}>Cart
                    {totalQuantity > 0 && 
                    <span className={styles.cartCount}>{totalQuantity}</span>}
                </Link>
            </div>
        </nav>
    )
}