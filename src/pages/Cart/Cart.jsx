import styles from './Cart.module.css'
import CartItem from '../../components/CartItem/CartItem'
import useCart from '../../hooks/useCart';

export default function Cart() {

    const {cart} = useCart();
    const totalQuantity = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
    const totalPrice = cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)

    if (cart.length === 0) {
        return <div className={styles.emptyCart}>Your cart is empty</div>;
    }

    return (
        <div className={styles.cartPage}>

            <div className={styles.cartList}>
                {cart.map((item) => <CartItem product={item}/>)}
            </div>

            <div className={styles.summary}>
                <div className={styles.summaryRow}>
                    <span>Items ({totalQuantity} pcs):</span>
                    <span>{totalPrice.toFixed(2)} $</span>
                </div>
                <div className={styles.summaryRow}>
                    <span>Delivery:</span>
                    <span>Free</span>
                </div>
                <div className={styles.summaryDivider}></div>
                <div className={styles.summaryTotal}>
                    <span>Total:</span>
                    <span>{totalPrice.toFixed(2)} $</span>
                </div>
                <button className={styles.orderBtn}>
                    Checkout
                </button>
            </div>
        </div>
        
    )
}