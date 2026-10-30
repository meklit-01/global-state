import { useContext } from "react";
import CartContext from "../context/CartContext";

function formatMoney(amount){
  return new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    maximumFractionDigits: 2,
   }).format(amount);
}

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  function removeFromCart(indexToRemove) {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === indexToRemove
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    });
  }

  function clearCart() {
    const confirmed = window.confirm(
      "Are you sure you want to clear your cart?",
    );

    if (confirmed) {
      setCart([]);
    }
  }

  return (
    <section>
      <div>
        <h2>Your Cart</h2>
        <a href="#products">Continue Shopping</a>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product, index) => (
          <div key={`${product.id}-${index}`}>
            <h3>{product.name}</h3>
            <p>Price: {formatMoney(product.price)} </p>
            <p>Subtotal: {formatMoney(product.price * product.quantity)} </p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        ))
      )}
      <p>Total: {formatMoney(totalPrice)} ETB</p>
      <button onClick={clearCart}>Clear Cart</button>
    </section>
  );
}

export default Cart;
