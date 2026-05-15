import QuantitySelector from '../QuantitySelector/QuantitySelector'
import styles from './CartItem.module.css'
import useCart from '../../hooks/useCart'

export default function CartItem({product}) {
    const { addToCart } = useCart();

    return (
        <div className={styles.cartItem}>
            <img className={styles.image} src={product.image} alt="img"/>
            <div className={styles.info}>
                <div className={styles.leftSection}>
                    <div>{product.title}</div>
                    <QuantitySelector
                        quantity={product.quantity}
                        setQuantity={(newQuantity) => {
                            addToCart({ ...product, quantity: newQuantity });
                        }}
                        addToCart={addToCart}
                        product={product}/>
                </div>
                <div className={styles.rightSection}>
                    <button 
                        className={styles.removeBtn}
                        onClick={() => {
                            addToCart({ ...product, quantity: 0 });
                        }}>✕</button>
                    <div className={styles.price}>{(product.price * product.quantity).toFixed(2)} $</div>
                </div>
            </div>
                
        </div>
    )
}