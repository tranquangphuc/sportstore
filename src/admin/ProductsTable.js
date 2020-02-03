import React, { Component } from 'react';
import { PaginationControls } from '../PaginationControls';
import { ProductsRow } from './ProductsRow';
import { Link } from 'react-router-dom';

export class ProductsTable extends Component {
  render = () => (
    <div>
      <h4 className="bg-info text-center text-white p-2">
        {this.props.totalSize} Products
      </h4>
      <PaginationControls key={['ID', 'Name', 'Category']} {...this.props} />
      <table className="table table-sm table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th className="text-right">Price</th>
            <th className="text-center" />
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(product => (
            <ProductsRow
              key={product.id}
              product={product}
              deleteProduct={this.props.deleteProduct}
            />
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/admin/product/create" className="btn btn-primary">
          Create Product
        </Link>
      </div>
    </div>
  );
}
