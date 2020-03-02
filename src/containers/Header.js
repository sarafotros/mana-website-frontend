import React, { Component } from 'react';
// import { Link } from "react-router-dom"

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <img src="images/header/logoMana.png" id="logo"/>

                <a href="#">Login</a> | <a href="#">SignUp</a>  |  <a href="#">Cart</a>
            </div>
         );
    }
}
 
export default Header ;