import React from 'react'

const Product = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name}></img>
             <p>Price: £{product.price}</p>
            <p>{product.description}</p>
            
        </div>
    )
}
export default Product
