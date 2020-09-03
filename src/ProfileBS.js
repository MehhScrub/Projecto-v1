import React, { Component } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import UserReview from "./components/UserReview/UserReview";
import RoundPic from "./components/RoundPic/RoundPic";
import StarRating from "./starrating/StarRating";
import "./components/SortByBtn/dropbtn.css";
import SortByBtn from "./components/SortByBtn/sorbybtn";
import ItemCard from "./components/itemcard/ItemCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfileBS.css";

class ProfileBS extends Component {
  state = {
    nuotrauka:
      "https://images.unsplash.com/photo-1593642634627-6fdaf35209f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
    vardas: "Jonas",
    telnumeris: "Vilnius",
    aprasymas:
      "APRASYMAS Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in eleifend ligula, ac dapibus ex. Mauris malesuada, felis sit amet viverra vestibulum, lectus lectus elementum quam, et convallis mauris neque in diam.",
    comments: [
      {
        id: 1,
        rnuotrauka:
          "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        comvardas: "Jonas1",
        commentbox:
          "Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras Pirmas komentaras ",
        urating: "4",
      },
      {
        id: 2,
        rnuotrauka:
          "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        comvardas: "Jonas2",
        commentbox: "Antras komentaras",
        urating: "5",
      },
      {
        id: 3,
        rnuotrauka:
          "https://images.unsplash.com/photo-1596568960638-96244807ed52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80",
        comvardas: "Jonas3",
        commentbox: "Trecias komentaras",
        urating: "3",
      },
    ],
  };
  render() {
    return (
      <div id="Profile" className="container">
        {/* UPPER INFO */}
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-auto col-lg mx-auto">
              <RoundPic picLink={this.state.nuotrauka} picSize="size--large" />
            </div>
            <div id="aprasymoinfo" className="col-xl-9 col-lg-8">
              <div className="column">
                <div className="row-lg-4">
                  <label id="vvardas">{this.state.vardas}</label>
                </div>
                <div className="row-lg-4">
                  <p id="aaprasymas">{this.state.aprasymas}</p>
                </div>
                <div className="row-lg-4">
                  <ul>
                    <li>
                      <button className="btn btn-outline-secondary">
                        Susisiekti
                      </button>
                    </li>
                    <li>
                      <FaMapMarkerAlt />
                      <label style={lblStyle}>{this.state.telnumeris}</label>
                    </li>
                    <li className="d-none d-sm-block">
                      {/* <FaStar /> */}
                      <StarRating />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ITEMS DIV */}
        <div className="container">
          <label id="chaptername">Nuomojami daiktai</label>
          <div id="searchas">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
              ></input>
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div id="itemcardsbox">
            <label>Item cards go here</label>
            <ItemCard />
          </div>
        </div>

        {/* REVIEWS DIV */}
        <div className="container">
          <div className="commentsinfo">
            <label id="chaptername">Atsiliepimai</label>
            <div id="reviewsname">
              <div className="row">
                <div className="col-xl-2 col-md-3 col-sm-4 d-none d-sm-block">
                  102 atsiliepimai
                </div>
                <div className="col-xl-3 col-md-3 col-sm-4 col-8">
                  <StarRating />
                </div>

                <div className="col-xl-7 col-md-6 col-sm-4 col-4">
                  <SortByBtn />
                </div>
              </div>
            </div>

            <UserReview comments={this.state.comments} />
          </div>
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
  /* <div id="reviewsname">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="row">
                    <div className="col-sm-4 col-3">
                      5.0 <StarRating />
                    </div>
                    <div className="col-sm-4 d-none d-sm-block">
                      <StarRating />
                    </div>
                    <div className="col-sm-4 col-9">102 atsiliepimai</div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-4 d-flex float-right">
                  <SortByBtn />
                </div>
              </div>
            </div> */
}

{
  /* <div id="reviewsname">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6 ">
                  <div className="row">
                    <div className="col-sm-6 col-3 d-none d-md-block">
                      102 atsiliepimai
                    </div>
                    <div className="col-sm-6 col-9 col-sm-12">
                      <StarRating />
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-6">
                  <SortByBtn />
                </div>
              </div>
            </div> */
}
