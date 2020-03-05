import React from 'react';
import {Fragment} from 'react';
import { Link } from "react-router-dom"

class Header extends React.Component {
	state = {  }
	
	logedIn = () => {
		return this.props.email ? <Fragment> <Link onClick={this.props.logOut} to="/">Log Out</Link> </Fragment> : <Fragment><Link to="/login"> Login </Link>  |  <Link to="/signup"> SignUp </Link> </Fragment>
	}
    render() { 
	return (
		<div>
			<Link to="/">
				<img
					src="https://res.cloudinary.com/ddxhjhvdj/image/upload/ar_1:1,b_rgb:f9fcff,bo_5px_solid_rgb:fdf9f9,c_fill,g_auto,r_max,w_200/v1583246911/Mana_fokaby.png"
					alt="logo"
				/>
			</Link>
			<Link to="/products"> Products </Link> |{' '}
			<Link to="/services"> Services </Link> | <Link to="#"> Find us</Link> |
			{ this.logedIn()}
			 |
			<Link to="/cart">Cart</Link>
		</div>
	  );
    }
}
 
export default Header ;