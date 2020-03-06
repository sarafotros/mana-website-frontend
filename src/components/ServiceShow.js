import React from 'react'


const ServiceShow = ({ service }) => {
    
    return (
			<div>
				<h2 class="productsH2">{service.name}</h2>
				<p class="productsH2">{service.description}</p>
				<img src={service.image} alt={service.name} />
				<p class="productsH2">Price: £{service.price}</p>
			</div>
		);
}
export default ServiceShow