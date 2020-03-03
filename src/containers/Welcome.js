import React from 'react';
import API from '../API';
import MainContainer from './MainContainer';
import { Route } from 'react-router-dom'

import Header from './Header'
import Footer from '../components/Footer';
import Products from './Products'; 
import Services from './Services';
import ServiceContainer from './ServiceContainer'
import ProductContainer from './ProductContainer'



class Welcome extends React.Component {
	state = {
		users: [],
		products: [],
		services: []
	};

	getUsers = () => {
		API.getUsers().then(users => this.setState({ users }));
	};

	getProducts = () => {
		API.getProducts().then(products => this.setState({ products }));
	}

	getServices = () => {
		API.getServices().then(services => this.setState({ services }));
	}

	componentDidMount() {
		this.getUsers();
		this.getProducts();
		this.getServices();
	}



    render() {
		const {users,products,services} = this.state
		return (
			<div>
					<Header />
	
					<Route exact path="/" component={() => <MainContainer users={users}/> }/>
					<Route exact path="/products" component={() => <Products products={products}/>} />
            		<Route exact path="/services" component={() => <Services services={services}/>} />
					<Route exact path="/services/:id" component={ServiceContainer}></Route>
					<Route exact path="/products/:id" component={ProductContainer}></Route>
					{/* <Instagram /> */}
					<Footer />
			</div>
		);
	}
}
 
export default Welcome;