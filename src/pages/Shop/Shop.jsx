import { useEffect } from "react";
import useCart from "../../hooks/useCart"
import { useFetchProducts } from "../../hooks/useFetchProducts";

export default function Shop() {
    const cart = useCart();
    const {productsList, error, loading} = useFetchProducts();

    useEffect(() => {
        console.log(productsList)
    }, [productsList]);

    if (error) return <p>Error</p>;
    if(loading) return <p>Loading...</p>;

    return(
        productsList && 
        <div>
            <p>Страница с товарами</p>
            <p>Корзина: {cart.join(', ')}</p>
        </div>
    )
}