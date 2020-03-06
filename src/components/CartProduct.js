import React, { Component } from 'react';
import { Link } from "react-router-dom"

const CartProduct = ({product,removeFromCart}) => {
    return (
        <div class="cartItems">
                <p class="cartText">{product.name}</p>
                <p class="cartText">£{product.price}</p>
            <button onClick={() => removeFromCart(product)} class="btn-card">Delete</button>
        </div>
    )
}

export default CartProduct