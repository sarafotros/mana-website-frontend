import React, { Component } from 'react';
import Product from '../components/Product'

class Products extends Component {
	state = { 
		photoFile: null
     }

    mapProducts = () => {
        return this.props.products.map(product => <Product product={product} key={product.id}/>)
    }

    handleChange = e => {
        this.props.sortProductsByPrice(e.target.value);
	}

	// handleFormChange = (e) => {
	// 	this.setState({
	// 		[e.target.name]: e.target.value
	// 	});
	// };
	
	// handleFile(e) {
	//    this.setState({photoFile: e.target.files[0]})
	// }
	// handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	console.log(e.target)
	// 	};


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
			 
			
				{/* <form onSubmit={this.handleSubmit}>
					<label>Name:</label>
						<input type="text" name="title" onChange={this.handleFormChange} /> <br />
						<label>Price:</label>
						<input type="text" name="price" onChange={this.handleFormChange} /> <br />
						<label>ml:</label>
						<input type="text" name="quantity" onChange={this.handleFormChange} /> <br />
						<label>Category:</label>
						<input type="text" name="category" onChange={this.handleFormChange} /> <br />
				
						<input type="file" onChange={this.handleFile}/>
						<button type="submit" value="Sign In" class="button">Create</button>
				</form> */}
				</div>
			);
    }
}
 
export default Products;