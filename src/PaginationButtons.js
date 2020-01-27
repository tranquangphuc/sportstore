import React, { Component } from 'react';

export class PaginationButtons extends Component {
  getPageNumbers() {
    if (this.props.pageMax < 4) {
      return [...Array(this.props.pageMax + 1).keys()].slice(1);
    } else if (this.props.page < 4) {
      return [1, 2, 3, 4, 5];
    } else if (this.props.page > this.props.pageMax - 4) {
      return [...Array(5).keys()].reverse().map(n => this.props.pageMax - n);
    } else {
      return [this.props.page - 1, this.props.page, this.props.page + 1];
    }
  }

  render() {
    const page = this.props.page;
    const pageMax = this.props.pageMax;
    const navigate = this.props.navigate;
    return (
      <React.Fragment>
        <button
          onClick={() => navigate(page - 1)}
          disabled={page === 1}
          className="btn btn-secondary mx-1"
        >
          Previous
        </button>
        {page > 4 && (
          <React.Fragment>
            <button
              className="btn btn-secondary mx-1"
              onClick={() => navigate(1)}
            >
              1
            </button>
            <span className="h4">...</span>
          </React.Fragment>
        )}
        {this.getPageNumbers().map(n => (
          <button
            className={`btn mx-1 ${
              n === page ? 'btn-primary' : 'btn-secondary'
            }`}
            onClick={() => navigate(n)}
            key={n}
          >
            {n}
          </button>
        ))}
        {page < pageMax - 4 && (
          <React.Fragment>
            <span className="h4">...</span>
            <button
              className="btn btn-secondary mx-1"
              onClick={() => navigate(pageMax)}
            >
              {pageMax}
            </button>
          </React.Fragment>
        )}
        <button
          onClick={() => navigate(page + 1)}
          disabled={page === pageMax}
          className="btn btn-secondary mx-1"
        >
          Next
        </button>
      </React.Fragment>
    );
  }
}
