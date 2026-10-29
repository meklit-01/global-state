import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

function Header() {
    const { cart } = useContext(CartContext);
  return (
    <header>
        <h1>My Shopping Cart</h1>
        <p>Cart items: {""}
          {cart.reduce((total, product) => total + product.quantity, 0)}
        </p>
    </header>
  )
}

export default Header