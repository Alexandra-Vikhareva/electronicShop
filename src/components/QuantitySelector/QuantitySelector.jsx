import styles from './QuantitySelector.module.css'

export default function QuantitySelector({quantity, setQuantity, addToCart, product}) {

    function handleMinusButton() {
        if (quantity >= 1) {
            addToCart({'product': product, 'quantity': quantity - 1});
            setQuantity(quantity - 1);
        }
    };

    function handlePlusButton() {
        addToCart({'product': product, 'quantity': quantity + 1});
        setQuantity(quantity + 1);
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

    function handleChangeCart(e) {
        let value = e.target.value;
        value = Number(value);
        
        addToCart({'product': product, 'quantity': value});
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
                   onChange={handleChangeQuantity}
                   onBlur={handleChangeCart}/> 

            <button onClick={handlePlusButton} 
                    className={styles.plusBtn}
                    disabled={quantity > 99}>
                         + 
            </button>
        </div>
    )
}