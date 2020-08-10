import React, { Component } from "react";
import RoundPic from "./RoundPic";

class UserReview extends Component {
  render() {
    return this.props.comments.map((comment) => (
      <div className="UserReview">
        <div style={{ width: "min-content" }}>
          <RoundPic picSize="size--medium" picLink={comment.rnuotrauka} />
        </div>
        <div>
          <ul>
            <li>{comment.comvardas}</li>
            <li>Rating</li>
            <li>{comment.commentbox}</li>
          </ul>
        </div>
        <hr />
      </div>
    ));
  }
}

export default UserReview;
