import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { GraphQlUrl } from '../data/Urls';
import { OrdersConnector } from './OrdersConnector';
import { ToggleLink } from '../ToggleLink';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ProductCreator } from './ProductCreator';
import { ProductEditor } from './ProductEditor';
import { ConnectedProducts } from './ProductsConnector';

const graphqlClient = new ApolloClient({ uri: GraphQlUrl });

export class Admin extends Component {
  render() {
    return (
      <ApolloProvider client={graphqlClient}>
        <div className="container-fluid">
          <div className="row">
            <div className="col bg-info text-white">SPORTS STORE</div>
          </div>
          <div className="row">
            <div className="col-3 p-2">
              <ToggleLink to="/admin/orders">Orders</ToggleLink>
              <ToggleLink to="/admin/products">Products</ToggleLink>
            </div>
            <div className="col-9 p-2">
              <Switch>
                <Route path="/admin/orders" component={OrdersConnector} />
                <Route
                  path="/admin/products/create"
                  component={ProductCreator}
                />
                <Route path="/admin/products/:id" component={ProductEditor} />
                <Route path="/admin/products" component={ConnectedProducts} />
                <Redirect to="/admin/orders" />
              </Switch>
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
