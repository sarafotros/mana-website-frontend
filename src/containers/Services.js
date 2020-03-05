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
			<div>
				<label>
					<strong> Filter Services By Price:</strong>
                    <select
                        value={this.props.serviceSortBy}
                        onChange={this.handleChange}
                    >
						<option value="all">All</option>
						<option value="low-to-high">Lowest to Highest</option>
						<option value="high-to-low">Highest to Lowest</option>
					</select>
				</label>
				<div class="productGrid">
				{this.mapServices()}
				</div>
			</div>
		);
	}
}
 
export default Services;