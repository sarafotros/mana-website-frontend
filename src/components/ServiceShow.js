import React from 'react'


const ServiceShow = ({ service, addToTheCart }) => {
	return (
		<div>
			<h2 class="productsH2">{service.name}</h2>
			<p class="productsH2">{service.description}</p>
			<img src={service.image} alt={service.name} />
			<p class="productsH2">Price: £{service.price}</p>
			<button class="btn-card" onClick={() => addToTheCart(service)}>
				Add To the cart
			</button>
		</div>
	);
};
export default ServiceShow