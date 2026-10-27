import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

function Header() {
    const { cart } = useContext(CartContext);
  return (
    <header>
        <h1>My Shopping Cart</h1>
        <p>Cart items: {cart.length}</p>
    </header>
  )
}

export default Header