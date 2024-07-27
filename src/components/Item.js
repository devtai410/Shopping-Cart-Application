import React from "react";
import "./Item.css";

import { useCart } from "../context/CartContext";

function Item(props) {
  const { id, name, price, image, quantity } = props;
  const { formatMoney, removeItem, addQuantity, decreaseQuantity} = useCart();
  return (
    <div className="card">
      <img src={image} alt={id} />
      <div className="product">
        <p className="name">สินค้า: {name}</p>
        <p className="price">ราคา: {(price).toLocaleString('th-TH')} ฿</p>
      </div>
      <div className="quantity">
        <button onClick={()=>addQuantity(id)}>+</button>
        <input type="text" value={quantity} disabled />
        <button onClick={()=>decreaseQuantity(id)}>-</button>
      </div>
      <div className="total-price">{formatMoney(quantity * price)}</div>
      <button onClick={()=>removeItem(id)}>Delete</button>
    </div>
  );
}

export default Item;
