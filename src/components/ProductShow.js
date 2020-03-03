import React from 'react'
import { Link } from "react-router-dom"

const Product = ({ product }) => {
   console.log(product)
    return (
        <div>
            <h2>{product.name}</h2>
            <img src="#"></img>
             <p>Price: £{product.price}</p>
            <p>{product.description}</p>
            
        </div>
    )
}
export default Product
