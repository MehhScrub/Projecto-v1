import React, { Component } from "react";

class UserReview extends Component {
  state = {
    rnuotrauka:
      "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    rvardas: "Petras",
    ratsiliepimas:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in eleifend ligula, ac dapibus ex. Mauris malesuada, felis sit amet viverra vestibulum, lectus lectus elementum quam.",
    //Rating
  };
  render() {
    return (
      <div className="UserReview">
        <div style={{ width: "min-content" }}>
          <img
            src={this.state.rnuotrauka}
            width="155px"
            height="155px"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div>
          <ul>
            <li>{this.state.rvardas}</li>
            <li>Rating</li>
            <li>{this.state.ratsiliepimas}</li>
          </ul>
        </div>
        <hr />
      </div>
    );
  }
}

export default UserReview;
