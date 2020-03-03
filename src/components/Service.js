/* eslint-disable jsx-a11y/alt-text */
import React from 'react'


const Service = ({ service }) => {
    
    return (
    <div>
        <h2>{service.name}</h2>
        <img src={service.image} />
    </div>
    )
}
export default Service