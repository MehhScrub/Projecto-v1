import React, { Component } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import UserReview from "./components/UserReview";
import RoundPic from "./components/RoundPic";

class ProfileBS extends Component {
  state = {
    nuotrauka:
      "https://images.unsplash.com/photo-1593642634627-6fdaf35209f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
    vardas: "Jonas",
    telnumeris: "Vilnius, Vilnius",
    aprasymas:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in eleifend ligula, ac dapibus ex. Mauris malesuada, felis sit amet viverra vestibulum, lectus lectus elementum quam, et convallis mauris neque in diam. Vivamus ac auctor diam. Proin tempor viverra justo, eu placerat orci blandit at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris blandit nec magna ac fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in eleifend ligula, ac dapibus ex. Mauris malesuada, felis sit amet viverra vestibulum, lectus lectus elementum quam, et convallis mauris neque in diam. Vivamus ac auctor diam. Proin tempor viverra justo, eu placerat orci blandit at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris blandit nec magna ac fringilla.",
    comments: [
      {
        id: 1,
        rnuotrauka:
          "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        comvardas: "Jonas1",
        commentbox: "Pirmas komentaras",
      },
      {
        id: 2,
        rnuotrauka:
          "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        comvardas: "Jonas2",
        commentbox: "Antras komentaras",
      },
      {
        id: 3,
        rnuotrauka:
          "https://images.unsplash.com/photo-1596568960638-96244807ed52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80",
        comvardas: "Jonas3",
        commentbox: "Trecias komentaras",
      },
    ],
  };
  render() {
    return (
      <div className="Profile">
        <div className="upperinfo">
          <div
            id="aprasymofoto"
            className="container"
            //style={{ width: "30%", background: "green" }}
          >
            <RoundPic picLink={this.state.nuotrauka} picSize="size--large" />
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
                // style={{ flex: "10" }}
                placeholder="Search..."
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary btn-sm"
                // style={{ flex: "1" }}
              ></input>
            </form>
          </div>
          <div id="itemcardsbox">
            <label>Item cards go here</label>
          </div>
        </div>
        <div className="commentsinfo">
          <label id="chaptername">Atsiliepimai</label>
          <div id="reviewsname">
            <ul>
              <li>5.0</li>
              <li>RatingStars</li>
              <li>102 atsiliepimai</li>
            </ul>
            <button className="btn btn-outline-secondary">
              Rusiuoti pagal auksciausi
            </button>
          </div>
          {/* <label>User comments go here</label> */}
          <UserReview comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

const lblStyle = {
  fontWeight: "bold",
};

export default ProfileBS;

{
  /* <img
              src={this.state.nuotrauka}
              width="250px"
              height="250px"
              style={{ borderRadius: "50%" }}
            /> */
}
