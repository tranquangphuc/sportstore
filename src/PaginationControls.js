import React, { Component } from 'react';
import { PaginationButtons } from './PaginationButtons';

export class PaginationControls extends Component {
  constructor(props) {
    super(props);
    this.pageSizes = this.props.pageSizes || [5, 10, 25, 100];
    this.sortKeys = this.props.sortKeys || ['Name', 'Price'];
  }

  handlePageSizeChange = event => this.props.setPageSize(event.target.value);
  handleSortKeyChange = event => this.props.setSortKey(event.target.value);

  render() {
    return (
      <div className="m-2">
        <div className="text-center m-1">
          <PaginationButtons
            page={this.props.page}
            pageMax={this.props.pageMax}
            navigate={this.props.navigateToPage}
          />
        </div>
        <div className="form-inline justify-content-center">
          <select
            className="form-control"
            onChange={this.handlePageSizeChange}
            value={this.props.pageSize || this.pageSizes[0]}
          >
            {this.pageSizes.map(s => (
              <option value={s} key={s}>
                {s} per page
              </option>
            ))}
          </select>
          <select
            className="form-control"
            onChange={this.handleSortKeyChange}
            value={this.props.sortKey || this.sortKeys[0]}
          >
            {this.sortKeys.map(k => (
              <option value={k} key={k}>
                Sort by {k}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
