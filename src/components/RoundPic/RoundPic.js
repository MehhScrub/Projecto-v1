import React, { Component } from "react";
import "./RoundPic.css";

//picSize - nuotraukos dydis
//picLink - nuotraukos link'as

export const STYLES = [
  "size--small",
  "size--normal",
  "size--medium",
  "size--large",
];

export const RoundPic = ({ picSize, picLink }) => {
  const checkPicSize = STYLES.includes(picSize) ? picSize : STYLES[0];
  return (
    <img
      className={`${checkPicSize}`}
      style={{ borderRadius: "50%" }}
      src={`${picLink}`}
    />
  );
};

export default RoundPic;
