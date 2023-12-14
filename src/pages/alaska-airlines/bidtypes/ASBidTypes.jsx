import React from "react";
import { Link } from "react-router-dom";
// import HelloNameSavingData from "../../../components/HelloNameSavingData";
import { BidTypesList } from "../../../components/BidTypesList/BidTypesList";

export const ASBidTypes = () => {
  return (
    <div className="container">
      <h1>Alaska Airlines - BidTypes</h1>
      <BidTypesList airline="AS" bidTypes={[]} />
      <Link to="/">Home</Link>
    </div>
  );
};
