import React from 'react';
import API from '../API';
import MainContainer from './MainContainer';

import Header from './Header'
import Footer from '../components/Footer';


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
		console.log(products)
		return (
			<div>
				<Header />
				{/* <Banner /> */}
                <MainContainer users={users} products={products} services={services}/>
				{/* <Instagram /> */}
				<Footer />
			</div>
		);
	}
}
 
export default Welcome;