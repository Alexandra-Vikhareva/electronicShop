import useCart from "../../hooks/useCart"

export default function Cart() {
    const context = useCart();

    return (
        <div>
            <p>Корзина покупателя</p>
        </div>
    )
}