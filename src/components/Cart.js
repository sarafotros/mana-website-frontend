import React, { Component } from 'react';
import CartProduct from './CartProduct'

class Cart extends Component {
 
    renderEachProduct = () => {
        const {cart} = this.props
        return cart.map(product => <CartProduct product={product}/>)
    }

    render() { 
        const {cart} = this.props
        return ( <div>{ cart.length >= 1 ? this.renderEachProduct() : <h1>empty cart</h1> }</div>  );
    }
}
 
export default Cart;