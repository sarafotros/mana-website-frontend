import React from 'react';
import { Route } from 'react-router-dom'
import { Link } from "react-router-dom"

import User from '../components/User';
import Products from './Products'; 
import Services from './Services';


const MainContainer = ({ users, products, services }) => {

    const renderUsers = () => {
        return users.map(user => <User name={user.name}/>)
    }

    return (
        <div>
            {/* <Banner /> */}
            <p>
                Products....................................................
                ...................................................Services
            </p>
            <Link to="/products">
                <img src="images/mainContainer/services.png" alt="logo" />
            </Link>

            <Link to="/services">
            <img src="https://res.cloudinary.com/ddxhjhvdj/image/upload/c_scale,w_500/v1583247534/service_f5aemg.jpg"
                        alt="logo"
                    />            </Link>
        </div>
    );

}
 
export default MainContainer;