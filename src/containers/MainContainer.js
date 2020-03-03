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
            <p>Products.......................................................
                ...................................................Services</p>
            <Link to="/products"><img src="images/mainContainer/services.png"/></Link>
         
            <Link to="/Services"><img src="images/mainContainer/services.png"/></Link>
        </div>
    )

}
 
export default MainContainer;