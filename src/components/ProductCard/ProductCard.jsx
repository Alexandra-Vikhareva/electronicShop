import styles from './ProductCard.module.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';

export default function ProductCard({product}) {
    const [isActive, setIsActive] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const {cart, addToCart} = useCart();

    function handleAddToCart() {
        addToCart({'product': product.id, 'quantity':quantity});
    };

    useEffect(() => {
        console.log(cart)
    }, [cart]);

    return (
        <div className={styles.productCard}>
            <img src={product.image} alt="headphones image" className={styles.photo}/>
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
                    {isActive ? 
                        <QuantitySelector
                            quantity={quantity}
                            setQuantity={setQuantity}
                            addToCart={addToCart}
                            product={product.id}/> 
                        : <button className={styles.btn_buy} 
                                  onClick={() => {handleAddToCart();
                                                  setIsActive(true)}}>
                                                    Купить
                          </button>}
                </div>
            </div>
        </div>
    )
}