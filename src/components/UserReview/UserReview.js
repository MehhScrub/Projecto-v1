import React, { Component } from "react";
import RoundPic from "../RoundPic/RoundPic";
import StarRating from "../../starrating/StarRating";
import "./UserReview.css";

class UserReview extends Component {
  render() {
    return this.props.comments.map((comment) => (
      <div className="container UserReview">
        <div className="column">
          <div className="row row-lg-2">
            <div className="col-lg-1 col-md-2 d-none d-md-block">
              <RoundPic picSize="size--normal" picLink={comment.rnuotrauka} />
            </div>
            <div className="column col-lg-11 col-md-10">
              <div className="row row-lg-6">
                <div className="col-lg-10 col-md-9">{comment.comvardas}</div>
                <div className="col-lg-2 col-md-3" style={{ fontSize: "1rem" }}>
                  2020-05-09
                </div>
              </div>
              <div className="row-lg-6">
                <StarRating />
              </div>
            </div>
          </div>
          <div className="row-lg-10" style={{ paddingTop: "1rem" }}>
            <p>{comment.commentbox}</p>
          </div>
        </div>
      </div>
    ));
  }
}

export default UserReview;
