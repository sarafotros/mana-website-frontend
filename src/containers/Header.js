import React, { Component } from 'react';
// import { Link } from "react-router-dom"

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <a href="/"><img src="images/header/logoMana.png" id="logo"/></a>
                <a href="/products" >Products</a> | <a href="/services">Services</a>  |  <a href="#">Find us</a> | 
                <a href="#">Login</a> | <a href="#">SignUp</a>  |  <a href="#">Cart</a>
            </div>
         );
    }
}
 
export default Header ;