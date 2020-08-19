import React, { Component } from "react";

class SortByBtn extends Component {
  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Rusiuoti pagal
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            Auksciausi
          </a>
          <a className="dropdown-item" href="#">
            Zemiausi
          </a>
          <a className="dropdown-item" href="#">
            Naujausi
          </a>
          <a className="dropdown-item" href="#">
            Seniausi
          </a>
        </div>
      </div>
    );
  }
}

export default SortByBtn;
