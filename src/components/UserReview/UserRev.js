import React, { Component } from "react";
import RoundPic from "../RoundPic/RoundPic";
import StarRating from "../../starrating/StarRating";
import "./UserReview.css";

class UserReview extends Component {
  render() {
    return this.props.comments.map((comment) => (
      <div className="UserReview">
        <div style={{ width: "min-content" }} className="d-none d-md-block">
          <RoundPic picSize="size--medium" picLink={comment.rnuotrauka} />
        </div>
        <div>
          <ul>
            <li>{comment.comvardas}</li>
            <li>
              <StarRating />
            </li>
            <li>{comment.commentbox}</li>
          </ul>
        </div>
      </div>
    ));
  }
}

export default UserReview;
