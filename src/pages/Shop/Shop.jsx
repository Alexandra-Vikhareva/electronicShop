import useCart from "../../hooks/useCart"

export default function Shop() {
    const cart = useCart();
    return(
        <div>
            <p>Страница с товарами</p>
            <p>Корзина: {cart.join(', ')}</p>
        </div>
    )
}