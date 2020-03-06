import React from 'react'


const ProductShow = ({product, addToTheCart}) => {
    return (
			<div>
				<h2 class="productsH2">{product.name}</h2>
				<img src={product.image} alt={product.name}></img>
				<p class="productsH2">Price: £{product.price}</p>
				<p class="productsH2">{product.description}</p>
				<button class="btn-card" onClick={() => addToTheCart(product)}>
					Add To the cart
				</button>
			</div>
		);
}
export default ProductShow
