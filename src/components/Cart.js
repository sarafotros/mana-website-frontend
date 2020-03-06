import React, { Component } from 'react';
import CartProduct from './CartProduct'

class Cart extends Component {
 
    renderEachProduct = () => {
        const {cart} = this.props
        return cart.map(product => <CartProduct product={product} removeFromCart={this.props.removeFromCart}/>)
    }

    render() { 
        const {cart} = this.props
        return ( 
            <div class="cartPage">
                { cart.length >= 1 ? 
                <div class="cartProductsContainer">
                    <h1 class="emptyCart">Your Cart</h1>
                {this.renderEachProduct()}
                </div>
                 : 
                <div class="cartProductsContainer">
                    <h1 class="emptyCart">.Empty cart</h1>
                </div> }
            </div>  
            
        );
    }
}
 
export default Cart;