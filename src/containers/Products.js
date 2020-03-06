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
				<div class="productsPageContainer">
					<h1 class="productsH1">Products</h1>
					<div class="search">
						<label>
							<strong class="productsH1"> Filter Products By Price:</strong>
							<select
								value={this.props.productSortBy}
								onChange={this.handleChange}
								class="productsH1"
							>
								<option value="all">All</option>
								<option value="low-to-high">Lowest to Highest</option>
								<option value="high-to-low">Highest to Lowest</option>
							</select>
						</label>
					</div>
					<div class="productGrid">{this.mapProducts()}</div>
				</div>
			);
    }
}
 
export default Products;