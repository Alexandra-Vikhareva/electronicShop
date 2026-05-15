import { Link } from 'react-router';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&auto=format" 
          alt="Modern shopping"
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay} />
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>Elevate Your Style</h1>
          <p className={styles.subtitle}>Discover curated collections for every moment</p>
          <Link to="/shop" className={styles.shopButton}>Shop Now →</Link>
        </div>
      </div>
    </div>
  );
}