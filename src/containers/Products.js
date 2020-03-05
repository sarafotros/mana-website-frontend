import React, { Component } from 'react';
import Product from '../components/Product'

class Products extends Component {
    state = { 
     }

    mapProducts = () => {
        return this.props.products.map(product => <Product product={product} key={product.id}/>)
    }

    handleChange = e => {
        this.props.sortProductsByPrice(e.target.value);
    }

    render() { 

     return (
				<div>
					<label>
						<strong> Filter Products By Price:</strong>
						<select
							value={this.props.productSortBy}
							onChange={this.handleChange}
						>
							<option value="all">All</option>
							<option value="low-to-high">Lowest to Highest</option>
							<option value="high-to-low">Highest to Lowest</option>
						</select>
					</label>
					<div class="productGrid">
					{this.mapProducts()}
					</div>
				</div>
			);
    }
}
 
export default Products;