import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Link to="/"><img src="images/header/logoMana.png" id="logo"/></Link>
                <Link to="/products" >Products</Link> | <Link to="/services">Services</Link>  |  <Link to="#">Find us</Link> | 
                <Link to="#">Login</Link> | <Link to="#">SignUp</Link>  |  <Link to="#">Cart</Link>
            </div>
         );
    }
}
 
export default Header ;