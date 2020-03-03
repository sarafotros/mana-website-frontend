import React, { Component } from 'react';
import ProductShow from '../components/ProductShow';


class ProductContainer extends Component {
   state = { 
      product: null
    }
    

    componentDidMount() {
        fetch(`http://localhost:3000/products/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(product => this.setState({ product})) 
    }



    render() { 
        return this.state.product ? 
            <ProductShow product={this.state.product} />
            :
            <h1>Loading...</h1>
         
    }
}
 
export default ProductContainer;