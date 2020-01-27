import React, { Component } from 'react';
import { ValidatedForm } from '../form/ValidatedForm';

export class Checkout extends Component {
  constructor(props) {
    super(props);
    this.defaultAttrs = { type: 'text', required: true };
    this.formModel = [
      { label: 'Name' },
      { label: 'Email', attrs: { type: 'email' } },
      { label: 'Address' },
      { label: 'City' },
      { label: 'Country' },
      { label: 'Zip/Postal Code', name: 'zip' }
    ];
  }

  handleSubmit = formData => {
    const order = {
      ...formData,
      products: this.props.cart.map(item => ({
        quantity: item.quantity,
        product_id: item.product.id
      }))
    };
    this.props.placeOrder(order);
    this.props.clearCart();
    this.props.history.push('/shop/thanks');
  };

  handleCancel = () => {
    this.props.history.push('/shop/cart');
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-dark text-white">
            <div className="navbar-brand">SPORTS STORE</div>
          </div>
        </div>
        <div className="row">
          <div className="col m-2">
            <ValidatedForm
              formModel={this.formModel}
              defaultAttrs={this.defaultAttrs}
              submitCallback={this.handleSubmit}
              cancelCallback={this.handleCancel}
              submitLabel="Place Order"
              CancelLabel="Return to Cart"
            />
          </div>
        </div>
      </div>
    );
  }
}
