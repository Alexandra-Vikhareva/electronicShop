import styles from './ProductCard.module.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import { useState } from 'react';

export default function ProductCard({product}) {
    const [isActive, setIsActive] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newValue) => {
        setQuantity(newValue);
    };

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
                            col={quantity}/> 
                        : <button className={styles.btn_buy} 
                                  onClick={() => setIsActive(true)}>Купить</button>}
                </div>
            </div>
        </div>
    )
}