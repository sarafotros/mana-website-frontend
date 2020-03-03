import React from 'react'
import { Link } from "react-router-dom"

const Service = ({ service }) => {
    
    return (
        <Link to={`services/${service.id}`}>
    <div>
    <h2>{service.name}</h2>
    <img src={service.image} />
    </div>
    </Link>
    )
}
export default Service