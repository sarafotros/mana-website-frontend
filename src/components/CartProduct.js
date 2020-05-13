import React, { Component } from 'react';
import { Link } from "react-router-dom"

const CartProduct = ({product,removeFromCart}) => {
    return (
			<div class="cartItems">
				<p class="cartText productsH2">{product.name}</p>
				<p class="cartText productsH2">£{product.price}</p>
				<button onClick={() => removeFromCart(product)} class="btn-card">
					Delete
				</button>
			</div>
		);
}

export default CartProduct