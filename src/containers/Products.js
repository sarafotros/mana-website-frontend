import React, { Component } from 'react';
import Product from '../components/Product'

class Products extends Component {
    state = {  }

    mapProducts = () => {
        return this.props.products.map(product => <Product product={product} key={product.id}/>)
    }

    render() { 

     return (
				<div>
					<label>
						<strong> Filter By Price:</strong>
						<select
							value={this.props.productSortBy}
							onChange={e => this.props.sortProductsByPrice(e.target.value)}
						>
							<option value="all">All</option>
							<option value="low-to-high">Lowest to Highest</option>
							<option value="high-to-low">Highest to Lowest</option>
						</select>
					</label>
					{this.mapProducts()}
				</div>
			);
    }
}
 
export default Products;