import { useContext } from "react";
import CartContext from "../context/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  function removeFromCart(indexToRemove){
    setCart((prevCart)=>
    prevCart.filter((product, index) => index != indexToRemove));
  }

  return (
    <section>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product, index) => (
          <div key={`${product.id}-${index}`}>
            <h3>{product.name}</h3>
            <p>Price: {product.price} ETB</p>

            <button onClick={()=> removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      )}
    </section>
  );
}

export default Cart;
