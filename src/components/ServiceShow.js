import React from 'react'


const ServiceShow = ({ service }) => {
    
    return (
    <div> 
    <h2>{service.name}</h2>
    <p>{service.description}</p>
    <img src={service.image} />
    <p>Price: £{service.price}</p>
    </div>
    )
}
export default ServiceShow