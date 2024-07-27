import React from 'react'
import "./Header.css"
import { useCart } from '../context/CartContext'

function Header() {
  const {amount} = useCart()
  return (
    <header>
      <p>Shopping Cart Application</p>
      <p>Product in Cart: {amount}</p>
    </header>
  )
}

export default Header
