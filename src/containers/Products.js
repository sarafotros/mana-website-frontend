import React, { Component } from 'react';
import Product from '../components/Product'

class Products extends Component {
    state = {  }

    mapProducts = () => {
        return this.props.products.map(product => <Product product={product} key={product.id}/>)
    }

    render() { 

     return (

        <div>{this.mapProducts()}</div>
        )
    }
}
 
export default Products;