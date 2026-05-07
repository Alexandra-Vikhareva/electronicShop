import useCart from "../../hooks/useCart"

export default function Cart() {
    const context = useCart();

    return (
        <div>
            <p>Корзина покупателя</p>
            <p>Контекст в Cart: {context.join(', ')}</p>
        </div>
    )
}