import styles from './QuantitySelector.module.css'
// import { useState } from "react"

export default function QuantitySelector({quantity, setQuantity}) {
    // const [quantity, setQuantity] = useState(col);

    function handleMinusButton() {
        if (quantity >= 1) setQuantity(quantity - 1)
    };

    function handlePlusButton() {
        setQuantity(quantity + 1)
    };

    function handleChangeQuantity(e) {
        let value = e.target.value;

        if (value === '') return;

        value = Number(value);

        if (!isNaN(value) & value !== '') {
            value = Math.min(99, Math.max(0, value));
            setQuantity(value);
        }
    }

    return (
        <div className={styles.quantitySelector}>
            <button onClick={handleMinusButton} 
                    className={styles.minusBtn}
                    disabled={quantity < 0}>
                         - 
            </button>

            <input type='number' 
                   className={styles.quantityInput} 
                   value={quantity}
                   onChange={handleChangeQuantity}/> 

            <button onClick={handlePlusButton} 
                    className={styles.plusBtn}
                    disabled={quantity > 99}>
                         + 
            </button>
        </div>
    )
}