import React from 'react'
import Item from "./Item"
import { useCart } from "../context/CartContext"

function Cart() {
    const { products, formatMoney, total } = useCart();
  return (
    <div className='cart'>
        <h1 style={{textAlign:"center"}}>
            Total Price: {formatMoney(total)} ฿
        </h1>
        {products.map((data) => {
            return <Item key={data.id} {...data} />
        })}
    </div>
  )
}

export default Cart
