import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { storeProduct, updateProduct } from './clientMutations';
import { ValidatedForm } from '../form/ValidatedForm';

export class ProductCreator extends Component {
  constructor(props) {
    super(props);
    this.defaultAttrs = { type: 'text', required: true };
    this.formModel = [
      { label: 'Name' },
      { label: 'Description' },
      { label: 'Category' },
      { label: 'price', attrs: { type: 'number' } }
    ];
    this.mutation = storeProduct;
    if (this.props.mode === 'edit') {
      this.mutation = updateProduct;
      this.formModel = [
        { label: 'ID', attrs: { disabled: true } },
        ...this.formModel
      ].map(item => ({
        ...item,
        attrs: {
          ...item.attrs,
          defaultValue: this.props.product[item.label.toLowerCase()]
        }
      }));
    }
  }

  navigate = () => this.props.history.push('/admin/products');

  render = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-dark text-white">
          <div className="navbar-brand">SPORTS STORE</div>
        </div>
      </div>
      <div className="row">
        <div className="col m-2">
          <Mutation mutation={this.mutation}>
            {(saveMutation, { client }) => (
              <ValidatedForm
                formModel={this.formModel}
                defaultAttrs={this.defaultAttrs}
                submitCallback={data => {
                  saveMutation({
                    variables: {
                      product: { ...data, price: Number(data.price) }
                    }
                  });
                  if (this.props.mode !== 'edit') {
                    client.resetStore();
                  }
                  this.navigate();
                }}
                cancelCallback={this.navigate}
                submitLabel="Save"
                cancelLabel="Cancel"
              />
            )}
          </Mutation>
        </div>
      </div>
    </div>
  );
}
