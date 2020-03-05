import React from 'react'


const ProductShow = ({product, addToTheCart}) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name}></img>
             <p>Price: £{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToTheCart(product)}>Add To the cart</button>
        </div>
    )
}
export default ProductShow
