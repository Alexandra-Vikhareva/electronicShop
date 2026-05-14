import useCart from "../../hooks/useCart"
import styles from './Cart.module.css'

export default function Cart() {
    const context = useCart();

    return (
        <div className={styles.cartList}>
            <p>Корзина покупателя</p>
        </div>
    )
}