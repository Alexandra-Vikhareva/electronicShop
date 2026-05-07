import styles from './ProductCard.module.css';

export default function ProductCard({product}) {
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
                    <button className={styles.btn_buy}>Купить</button>
                </div>
            </div>
        </div>
    )
}