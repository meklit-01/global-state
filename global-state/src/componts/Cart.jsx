import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

function Cart() {
    const { cart } = useContext(CartContext);
  return (
    <section>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (<p>Your cart is empty</p>):(
            cart.map((product)=> (
                <div key={`${product.id} - ${index}`}>
                    <h3>{product.name}</h3>
                    <p>Price: {product.price} ETB</p>
                </div>
            ))
        )}
    </section>
  )
}

export default Cart