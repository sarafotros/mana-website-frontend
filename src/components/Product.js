import React from 'react'
import { Link } from "react-router-dom"

const Product = ({ product }) => {

    return (
        
        <Link to={`products/${product.id}`}>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name}></img>
        </Link>
    )
}
export default Product