import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart не работает');
    }

    return context
}