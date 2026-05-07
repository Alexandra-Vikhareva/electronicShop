import styles from './ProductCard.module.css';

export default function ProductCard() {
    return (
        <div className={styles.productCard}>
            <img src="src/assets/images/headphones.png" alt="headphones image" className={styles.photo}/>
            <div className={styles.info}>
                <div className={styles.col1}>
                    <div className={styles.itemName}>Apple BYZ S8521</div>
                    <div className={styles.star}>
                        <img src="src/assets/images/Star.svg" alt="star icon" className={styles.icon} />
                        <span className={styles.rating}>4.7</span>
                    </div>
                </div>

                <div className={styles.col2}>
                    <div className={styles.price}>2927 P</div>
                    <button className={styles.btn_buy}>Купить</button>
                </div>
            </div>
        </div>
    )
}