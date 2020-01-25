import React, { Component } from 'react';
import { CartDetailsRow } from './CartDetailsRow';
import { Link } from 'react-router-dom';

export class CartDetails extends Component {
  getLinkClass = () =>
    `btn btn-secondary m-1 ${this.props.cartItems === 0 ? 'disabled' : ''}`;
  render() {
    return (
      <div className="m-3">
        <h2 className="text-center">Your Cart</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Product</th>
              <th className="text-right">Price</th>
              <th className="text-right">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <CartDetailsRow
              cart={this.props.cart}
              cartPrice={this.props.cartPrice}
              updateQuantity={this.props.updateCartQuantity}
              removeFromCart={this.props.removeFromCart}
            />
          </tbody>
        </table>
        <div className="text-center">
          <Link className="btn btn-primary m-1" to="/shop">
            Continue Shopping
          </Link>
          <Link className={this.getLinkClass()} to="/shop/checkout">
            Checkout
          </Link>
        </div>
      </div>
    );
  }
}
