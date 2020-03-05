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
		<div class="navBar">
			<Link to="/">
				<img
					src="https://res.cloudinary.com/ddxhjhvdj/image/upload/c_scale,h_88/v1583430725/Group_3_q6qgti.png"
					alt="logo"
					class="logo"
				/>
			</Link>
			<div class="navLinks">
				<Link to="/products"> Products </Link>
				<Link to="/services"> Services </Link>
				<Link to="#"> Find us</Link>
			</div>
			<div class="logCart">
				{ this.logedIn()}
				<Link to="/cart">Cart</Link>
			</div>

		</div>
	  );
    }
}
 
export default Header ;