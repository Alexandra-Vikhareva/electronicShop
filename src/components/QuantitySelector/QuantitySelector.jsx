import styles from './QuantitySelector.module.css'
import { useState } from "react"

export default function QuantitySelector({col}) {
    const [quantity, setQuantity] = useState(col);

    function handleMinusButton() {
        if (quantity >= 1) setQuantity(quantity - 1)
    };

    function handlePlusButton() {
        setQuantity(quantity + 1)
    };

    function handleChangeQuantity(e) {
        setQuantity(e.target.value)
    }

    return (
        <div className={styles.quantitySelector}>
            <button onClick={handleMinusButton} 
                    className={styles.plusBtn}>
                         - 
            </button>

            <input type="text" 
                   className={styles.quantityInput} 
                   value={quantity}
                   onChange={handleChangeQuantity}/> 

            <button onClick={handlePlusButton} 
                    className={styles.minusBtn}>
                         + 
            </button>
        </div>
    )
}