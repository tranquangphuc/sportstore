import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export class ToggleLink extends Component {
  render() {
    return (
      <Route
        path={this.props.to}
        exact={this.props.exact}
        children={routeProps => {
          const baseClass = routeProps.baseClass || 'mt-2 btn btn-block';
          const activeClass = routeProps.activeClass || 'btn-primary';
          const inActiveClass = routeProps.inActiveClass || 'btn-secondary';
          const combinedClass = `${baseClass} ${
            routeProps.match ? activeClass : inActiveClass
          }`;
          return (
            <Link
              to={this.props.to}
              className={combinedClass}
              children={this.props.children}
            />
          );
        }}
      />
    );
  }
}
