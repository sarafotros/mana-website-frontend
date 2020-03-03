import React, { Component } from 'react';
import Product from '../components/Product';


class ProductContainer extends Component {
   state = { 
      product: null
    }
    

    componentDidMount() {
        fetch(`http://localhost:3000/services/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(product => this.setState({ product})) 
    }



    render() { 
        return this.state.product ? 
            <Product product={this.state.product} />
            :
            <h1>Loading...</h1>
         
    }
}
 
export default ProductContainer;