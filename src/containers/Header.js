import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Header extends Component {
    state = {  }
    render() { 
        return (
					<div>
						<Link to="/">
							<img
								src="https://res.cloudinary.com/ddxhjhvdj/image/upload/ar_1:1,b_rgb:f9fcff,bo_5px_solid_rgb:fdf9f9,c_fill,g_auto,r_max,w_200/v1583246911/Mana_fokaby.png"
								alt="logo"
							/>
						</Link>
						<Link to="/products">Products</Link> |{' '}
						<Link to="/services">Services</Link> | <Link to="#">Find us</Link> |
						<Link to="/login">Login</Link> | <Link to="#">SignUp</Link> |{' '}
						<Link to="#">Cart</Link>
					</div>
				);
    }
}
 
export default Header ;