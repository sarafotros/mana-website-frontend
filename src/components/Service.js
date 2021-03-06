/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from "react-router-dom"

const Service = ({ service }) => {
    
    return (
        <div class="productItem">
            <Link to={`services/${service.id}`}>
                <div>
                <h2>{service.name}</h2>
                <img src={service.image} />
                </div>
            </Link>
        </div>
    )
}
export default Service