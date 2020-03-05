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
		sortedServices: null,
		sortP: '',
		sortS: '',
		filteredP: ''
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
	//products
	sortProductsByPrice = productSortBy => {
		this.setState({ sortP: productSortBy });
		if (productSortBy === 'all') {
			return this.setProductSort(this.state.products);
		}
		if (productSortBy === 'low-to-high') {
			return this.setProductSort(
				[...this.state.products].sort((a, b) => (a.price > b.price ? 1 : -1))
			);
		}
		if (productSortBy === 'high-to-low') {
			return this.setProductSort(
				[...this.state.products].sort((a, b) => (a.price < b.price ? 1 : -1))
			);
		}
	};

	filterProductsByCategory = () => {
		const { filteredP, sortP, products } = this.state;

		// if (!filteredP) return products;

		switch (filteredP) {
			case 'Face':
				return products.filter(product => product.category === 'Face');
			case 'Body':
				return products.filter(product => product.category === 'Body');
			case 'Eye':
				return products.filter(product => product.category === 'Eye');
			case 'Hands':
				return products.filter(product => product.category === 'Hands');
			case 'low-to-high':
				return this.setProductSort(
					[...products].sort((a, b) => (a.price > b.price ? 1 : -1))
				);
			case 'high-to-low':
				return this.setProductSort(
					[...products].sort((a, b) => (a.price < b.price ? 1 : -1))
				);
			default:
				return products;
		}

		// if (this.state.filteredP === "Eye") {
		// 	return this.state.products.filter(product => product.category === 'Eye');
		// } else {
		// 	return this.state.products
		// 	console.log("i'm getting all the products")
		// }
	};
	setFilterP = filter => {
		this.setState({ filteredP: filter });
	};

	//Services
	sortServicesByPrice = () => {
		this.setState({ sortS: this.state.sortP });
		if (this.state.sortP === 'all') {
			return this.setServiceSort(this.state.services);
		}
		if (this.state.sortP === 'low-to-high') {
			return this.setServiceSort(
				[...this.state.services].sort((a, b) => (a.price > b.price ? 1 : -1))
			);
		}
		if (this.state.sortP === 'hight-to-low') {
			return this.setServiceSort(
				[...this.state.services].sort((a, b) => (a.price < b.price ? 1 : -1))
			);
		}
	};

	setProductSort = products => {
		this.setState({ sortedProducts: products });
	};

	setServiceSort = services => {
		this.setState({ sortedServices: services });
	};

	render() {
		const {
			users,
			products,
			services,
			sortedProducts,
			sortedServices,
			filteredP
		} = this.state;

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
							products={this.filterProductsByCategory}
							sortProductsByPrice={this.sortProductsByPrice}
							productSortBy={this.state.sortP}
							setFilterP={this.setFilterP}
							filteredP={filteredP}
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
				<Route exact path="/cart" component={Cart} />

				<Route exact path="/services/:id" component={ServiceContainer}></Route>
				<Route exact path="/products/:id" component={ProductContainer}></Route>
				{/* <Instagram /> */}
				<Footer />
			</div>
		);
	}
}

export default Welcome;
