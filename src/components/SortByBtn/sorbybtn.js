import React, { Component } from "react";
import { FaFilter } from "react-icons/fa";
import "./dropbtn.css";

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
          <FaFilter />
          <span className="rusiuotipagal">Rusiuoti pagal</span>
        </button>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
        >
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
