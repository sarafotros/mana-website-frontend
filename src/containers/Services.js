import React, { Component } from 'react';
import Service from '../components/Service'

class Services extends Component {
	state = {};

	mapServices = () => {
		return this.props.services.map(service => (
			<Service service={service} key={service.id} />
		));
	};

	handleChange = e => {
		this.props.sortServicesByPrice(e.target.value);
	};

	render() {
		return (
			<div class="productsPageContainer">
				<h1 class="productsH1">Services</h1>
				<div class="search">
					<label >
						<strong class="productsH1"> Filter Services By Price:</strong>
						<select
							value={this.props.serviceSortBy}
							onChange={this.handleChange}
							class="productsH1"
						>
							<option class="productsH1" value="all">
								All
							</option>
							<option class="productsH1" value="low-to-high">
								Lowest to Highest
							</option>
							<option class="productsH1" value="high-to-low">
								Highest to Lowest
							</option>
						</select>
					</label>
				</div>
				<div class="productGrid">{this.mapServices()}</div>
			</div>
		);
	}
}
 
export default Services;