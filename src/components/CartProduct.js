import React, { Component } from 'react';
import { Link } from "react-router-dom"

const CartProduct = ({product}) => {
    return (
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default CartProduct