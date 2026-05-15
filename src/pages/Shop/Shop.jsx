import { useEffect } from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './Shop.module.css'

export default function Shop() {
    const {productsList, error, loading} = useFetchProducts();

    useEffect(() => {
        const a = productsList;
        console.log(a)
    }, [productsList]);

    if (error) return <p>Error</p>;
    if(loading) return <p>Loading...</p>;

    return(
        productsList && 
        <div className={styles.shop}>
            <div className={styles.shopList}>
                {productsList.map((item) => <ProductCard product={item} key={item.id}/>)}
                
            </div>
        </div>
    )
}