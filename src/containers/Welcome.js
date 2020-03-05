import React from 'react';
import API from '../API';
import MainContainer from './MainContainer';
import { Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from '../components/Footer';
import Products from './Products';
import Services from './Services';
import ServiceContainer from './ServiceContainer';
import ProductContainer from './ProductContainer';

import Login from '../components/Login';
import SignUp from '../components/SignUp';

import Cart from '../components/Cart';

class Welcome extends React.Component {
	state = {
		users: [],
		products: [],
		services: [],
		email: null,
		user: null,
		sortedProducts: null,
		cart: [],
		sortedServices: null,
		sortP: '',
		sortS: ''
	};

	logIn = (user, token) => {
		if (user) {
			this.setState({
				email: user.email,
				user: user
			});
			localStorage.token = token;
		}
	};

	logOut = () => {
		this.setState({
			email: null
		});
		localStorage.removeItem('token');
	};

	getUsers = () => {
		API.getUsers().then(users => this.setState({ users }));
	};

	getProducts = () => {
		API.getProducts().then(products => this.setState({ products }));
	};

	getServices = () => {
		API.getServices().then(services => this.setState({ services }));
	};

	componentDidMount() {
		if (localStorage.token) {
			API.validate(localStorage.token).then(json =>
				this.logIn(json.user, json.token)
			);
		}
		this.getUsers();
		this.getProducts();
		this.getServices();
	}

	sortProductsByPrice = productSortBy => {
		this.setState({ sortP: productSortBy });
		if (productSortBy === 'all') {
			return this.setProductSort(this.state.products);
		}
		if (productSortBy === 'low-to-high') {
			return this.setProductSort(
				[...this.state.products].sort((a, b) => (a.price > b.price ? 1 : -1)));
		}
		if (productSortBy === 'high-to-low') {
			return this.setProductSort(
				[...this.state.products].sort((a, b) => (a.price < b.price ? 1 : -1)));
		}
	};


	sortServicesByPrice = serviceSortBy => {
		this.setState({ sortS: serviceSortBy });
		if (serviceSortBy === 'all') {
			return this.setServiceSort(this.state.services)
		}
		if (serviceSortBy === 'low-to-high') {
			return this.setServiceSort(
				[...this.state.services].sort((a, b) => (a.price > b.price ? 1 : -1)));
		}
		if (serviceSortBy === 'hight-to-low') {
			return this.setServiceSort(
				[...this.state.services].sort((a, b) => (a.price < b.price ? 1 : -1)));
		}
	}

	setProductSort = products => {
		this.setState({ sortedProducts: products });
	};


	///cart

	addToTheCart = (prod) => {
		this.setState({
			cart: [...this.state.cart,prod]
		})
	}


	setServiceSort = services => {
		this.setState({ sortedServices: services });
	};

	render() {
		const { users, products, services, sortedProducts, sortedServices } = this.state;


		return (
			<div>
				<Header email={this.state.email} logOut={this.logOut} />
				{this.state.email && <Redirect to="/" />}
				<Route exact path="/" component={() => <MainContainer />} />
				<Route
					exact
					path="/products"
					component={() => (
						<Products
							products={sortedProducts ? sortedProducts : products}
							sortProductsByPrice={this.sortProductsByPrice}
							productSortBy={this.state.sortP}
						/>
					)}
				/>
				<Route
					exact
					path="/services"
					component={() => (
						<Services
							services={sortedServices ? sortedServices : services}
							sortServicesByPrice={this.sortServicesByPrice}
							serviceSortBy={this.state.sortS}
						/>
					)}
				/>

				<Route
					exact
					path="/login"
					component={() => <Login logIn={this.logIn} />}
				/>
				<Route
					exact
					path="/signup"
					component={() => <SignUp logIn={this.logIn} />}
				/>
				<Route exact path="/cart" component={() => <Cart cart={this.state.cart} />} />

				<Route exact path="/services/:id" component={(props) => <ServiceContainer {...props} /> }></Route>
				<Route exact path="/products/:id" component={(props) => <ProductContainer {...props}  addToTheCart={this.addToTheCart}/>}></Route>
				{/* <Instagram /> */}
				<Footer />
			</div>
		);
	}
}

export default Welcome;
