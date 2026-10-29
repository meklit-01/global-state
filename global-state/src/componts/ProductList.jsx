
import { useContext } from "react";
import products from "../data/products";
import CartContext from "../context/CartContext";

function ProductList() {
  const { cart, setCart } = useContext(CartContext);

  function addToCart(product) {
  setCart((prevCart) => {
    const existingProduct = prevCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prevCart, { ...product, quantity: 1 }];
  });
}

  return (
    <section>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price} ETB</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
