import styles from './QuantitySelector.module.css'

export default function QuantitySelector({ quantity, onChange }) {

    function handleMinus() {
        if (quantity > 0) {
            onChange(quantity - 1);
        }
    }

    function handlePlus() {
        if (quantity < 99) {
            onChange(quantity + 1);
        }
    }

    function handleInput(e) {
        const value = e.target.value;

        if (value === '') return;

        const num = Number(value);
        if (!isNaN(num)) {
            onChange(Math.min(99, Math.max(0, num)));
        }
    }

    return (
        <div className={styles.quantitySelector}>
            <button
                onClick={handleMinus}
                className={styles.minusBtn}
                disabled={quantity <= 0}>
                -
            </button>

            <input
                type='number'
                className={styles.quantityInput}
                value={quantity}
                onChange={handleInput}
            />

            <button
                onClick={handlePlus}
                className={styles.plusBtn}
                disabled={quantity >= 99}>
                +
            </button>
        </div>
    )
}