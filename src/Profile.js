import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  state = {
    nuotrauka:
      "https://images.unsplash.com/photo-1593642634627-6fdaf35209f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
    vardas: "Jonas",
    telnumeris: "911",
    aprasymas: "yo welcome to my crib",
  };

  render() {
    return (
      <div style={pagesize} className="Profile">
        <div className="upperinfo">
          <div className="container">
            <img
              src={this.state.nuotrauka}
              width="250px"
              height="250px"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="container">
            <label id="vvardas">{this.state.vardas}</label>
            <p id="aaprasymas">{this.state.aprasymas}</p>
            <button>Susisiekti</button>
            <label style={lblStyle}>{this.state.telnumeris}</label>
            <label style={lblStyle}>Rating</label>
          </div>
        </div>
        <div className="cardsinfo">
          <label id="chaptername">Nuomojami daiktai</label>
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
              className="btn btn-secondary btn-sm"
              style={{ flex: "1" }}
            ></input>
          </form>
          <label>Item cards go here</label>
        </div>
        <div className="commentsinfo">
          <label id="chaptername">Atsiliepimai</label>
          <label>User comments go here</label>
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
  background: "lightblue",
  margin: "auto",
};

export default Profile;
