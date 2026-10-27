import React, { useContext } from 'react'
import { CartProvider } from '../context/CartContext'
import products from '../data/products'

function ProductList() {
  const { cart, setCart} = useContext(CartProvider);

  function addToCart(product){
    setCart((prevCart)=> [ ...prevCart, product]);
  }
  return (
    <section>
      <h2>Products</h2>
      {products.map((product)=>
      <div key={product.id}>
         <h3>{product.name}</h3>
         <p>Price: {product.price} ETB</p>
         <button onClick={()=> addToCart(product)}>
          Add to Cart
         </button>
      </div>)}
    </section>
  )
}

export default ProductList