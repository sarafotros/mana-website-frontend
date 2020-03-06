import React, { Component } from 'react';
import CartProduct from './CartProduct'

class Cart extends Component {
 
    renderEachProduct = () => {
        const {cart} = this.props
        return cart.map(product => <div class="cartProductsContainer"><CartProduct product={product}/></div>)
    }

    render() { 
        const {cart} = this.props
        return ( 
            <div class="cartPage">
                { cart.length >= 1 ? this.renderEachProduct() : <div class="cartProductsContainer"><h1 class="emptyCart">.Empty cart</h1></div> }
            </div>  
            
        );
    }
}
 
export default Cart;