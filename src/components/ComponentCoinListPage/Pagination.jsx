// Pagination.js

import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    const { totalCoins, coinsPerPage, currentPage, onChangePage } = this.props;

    const pageNumbers = Math.ceil(totalCoins / coinsPerPage);

    return (
      <div className="pagination-btn">
        <button
          onClick={() => onChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span className="pagination-text">
          {currentPage} of {pageNumbers}
        </span>

        <button
          onClick={() => {
            if (currentPage < pageNumbers) {
              onChangePage(currentPage + 1);
            }
          }}
          disabled={currentPage === pageNumbers}
        >
          Next
        </button>
      </div>
    );
  }
}
