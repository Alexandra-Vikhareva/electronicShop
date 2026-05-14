import useCart from "../../hooks/useCart"
import styles from './Home.module.css'

export default function Home() {
    const cart = useCart();
    return(
        <div className={styles.home}>
            <p>Основная страница</p>
        </div>
    )
}