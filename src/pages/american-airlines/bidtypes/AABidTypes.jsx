import React from "react";
import { Link } from "react-router-dom";
import { BidTypesList } from "../../../components/BidTypesList/BidTypesList";

export const AABidTypes = () => {
  return (
    <>
      <div className="container">
        <h1>American Airlines - BidTypes</h1>
        <Link to="/">Home</Link>
        <BidTypesList airline="AA" bidTypes={[]} />
      </div>
    </>
  );
};

// {
//   id: 1,
//   airline: "AA",
//   fleet: "73G",
//   seat: "Captain",
//   domicile: "SEA",
//   status: "Current",
//   numBidPeriods: 1,
//   importedOn: "Nov 11 2023, 3:02PM",
// },
// {
//   id: 2,
//   airline: "AA",
//   fleet: "737",
//   seat: "First Officer",
//   domicile: "SEA",
//   status: "Current",
//   numBidPeriods: 1,
//   importedOn: "Nov 11 2023, 3:07PM",
// },
// {
//   id: 3,
//   airline: "AA",
//   fleet: "736",
//   seat: "First Officer",
//   domicile: "SLC",
//   status: "Current",
//   numBidPeriods: 2,
//   importedOn: "Nov 11 2023, 3:09PM",
// },
