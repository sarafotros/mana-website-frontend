import React from 'react';
import { Route } from 'react-router-dom'

import User from '../components/User';
import Products from './Products'; 
import Services from './Services';


const MainContainer = ({ users, products, services }) => {

    const renderUsers = () => {
        return users.map(user => <User name={user.name}/>)
    }

    return (
        <div>
            {renderUsers()}
            <a href="#"><img src="images/mainContainer/services.png"/></a>
            <Route path="/products" component={() => <Products products={products}/>} />
            <Route path="/services" component={() => <Services services={services}/>} />
          
        </div>
    )

}
 
export default MainContainer;