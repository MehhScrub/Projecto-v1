import React, { Component } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map((star) => {
        return (
          <label>
            <input type="radio" name="rating" style={{ display: "none" }} />
            <FaStar size={100} />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
