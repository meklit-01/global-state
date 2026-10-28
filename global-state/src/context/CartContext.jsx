import { createContext, useEffect, useState  } from "react";

const CartContext = createContext();

export function CartProvider({ children }){
    const [cart, setCart] = useState(()=> {
        const savedCart = localStorage.getItem("shopping-cart");

        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(()=>{
        localStorage.setItem("shopping-cart", JSON.stringify(cart));
    },[cart]);

    return(
        <CartContext.Provider value={{ cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;