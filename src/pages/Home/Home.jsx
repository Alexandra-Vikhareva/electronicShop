import useCart from "../../hooks/useCart"

export default function Home() {
    const cart = useCart();
    return(
        <p>Основная страница</p>
    )
}