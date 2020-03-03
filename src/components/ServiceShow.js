import React from 'react'


const ServiceShow = ({ service }) => {
    
    return (
    <div> 
    <h2>{service.name}</h2>
    <p>{service.description}</p>
    <img src={service.image} alt={service.name}/>
    <p>Price: £{service.price}</p>
    </div>
    )
}
export default ServiceShow