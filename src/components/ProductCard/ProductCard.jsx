import styles from './ProductCard.module.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import { useState } from 'react';
import useCart from '../../hooks/useCart';

export default function ProductCard({ product }) {
    const { cart, addToCart } = useCart();

    const cartItem = cart.find(item => item.product === product.id);
    const isActive = Boolean(cartItem);

    const [localQuantity, setLocalQuantity] = useState(1);

    function handleAddToCart() {
        addToCart({
            product: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
        setLocalQuantity(1);
    }

    function handleQuantityChange(newQuantity) {
        addToCart({
            product: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: newQuantity,
        });
    }

    return (
        <div className={styles.productCard}>
            <img src={product.image} alt="product image" className={styles.photo} />
            <div className={styles.info}>
                <div className={styles.col1}>
                    <div className={styles.itemName}>{product.title}</div>
                    <div className={styles.star}>
                        <img src="src/assets/images/Star.svg" alt="star icon" className={styles.icon} />
                        <span className={styles.rating}>{product.rating.rate}</span>
                    </div>
                </div>

                <div className={styles.col2}>
                    <div className={styles.price}>{product.price} $</div>
                    {isActive
                        ? <QuantitySelector
                            quantity={cartItem.quantity}
                            onChange={handleQuantityChange}
                          />
                        : <button className={styles.btn_buy} onClick={handleAddToCart}>
                            Купить
                          </button>
                    }
                </div>
            </div>
        </div>
    )
}