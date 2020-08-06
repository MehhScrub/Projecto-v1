import React, { Component } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import UserReview from "./components/UserReview";

class ProfileBS extends Component {
  state = {
    nuotrauka:
      "https://images.unsplash.com/photo-1593642634627-6fdaf35209f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
    vardas: "Jonas",
    telnumeris: "86123456",
    aprasymas:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in eleifend ligula, ac dapibus ex. Mauris malesuada, felis sit amet viverra vestibulum, lectus lectus elementum quam, et convallis mauris neque in diam. Vivamus ac auctor diam. Proin tempor viverra justo, eu placerat orci blandit at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris blandit nec magna ac fringilla.",
  };
  render() {
    return (
      <div style={pagesize} className="Profile">
        <div className="upperinfo">
          <div className="container" style={{ width: "310px" }}>
            <img
              src={this.state.nuotrauka}
              width="250px"
              height="250px"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div id="aprasymoinfo" className="container">
            <div>
              <label id="vvardas">{this.state.vardas}</label>
            </div>
            <div>
              <p id="aaprasymas">{this.state.aprasymas}</p>
            </div>
            <ul>
              <li>
                <button className="btn btn-outline-secondary">
                  Susisiekti
                </button>
              </li>
              <li>
                <FaPhoneAlt />
                <label style={lblStyle}>{this.state.telnumeris}</label>
              </li>
              <li>
                <FaRegStar />
                <label style={lblStyle}>Rating</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="cardsinfo">
          <label id="chaptername">Nuomojami daiktai</label>
          <div id="searchas">
            <form>
              <input
                type="text"
                name="title"
                style={{ flex: "10" }}
                placeholder="Search..."
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary btn-sm"
                style={{ flex: "1" }}
              ></input>
            </form>
          </div>
          <div id="itemcardsbox">
            <label>Item cards go here</label>
          </div>
        </div>
        <div className="commentsinfo">
          <label id="chaptername">Atsiliepimai</label>
          {/* <label>User comments go here</label> */}
          <UserReview />
        </div>
      </div>
    );
  }
}

const lblStyle = {
  fontWeight: "bold",
};

const pagesize = {
  width: "1110px",
  // justifyContent: "center",
  // background: "lightblue",
  margin: "auto",
};

export default ProfileBS;

{
  /* <div className="p-2">
<label id="vvardas">{this.state.vardas}</label>
</div>
<div className="p-2">
  <p id="aaprasymas">{this.state.aprasymas}</p>
</div>

<div className="p-2">
  <button>Susisiekti</button>
</div>

<div className="p-2">
  <label style={lblStyle}>{this.state.telnumeris}</label>
</div>

<div className="p-2">
  <label style={lblStyle}>Rating</label>
</div> */
}
