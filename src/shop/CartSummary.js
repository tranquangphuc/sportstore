import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CartSummary extends Component {
  getSummary() {
    if (this.props.cartItems) {
      return (
        <span>
          {this.props.cartItems} item(s), ${this.props.cartPrice.toFixed(2)}
        </span>
      );
    } else {
      return <span>Your cart: (empty)</span>;
    }
  }

  getLinkClass() {
    return `btn btn-sm btn-dark text-white ${
      this.props.cartItems ? '' : 'disabled'
    }`;
  }

  render() {
    return (
      <div className="float-right">
        <small>
          {this.getSummary()}
          <Link className={this.getLinkClass()} to="/shop/cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </small>
      </div>
    );
  }
}
