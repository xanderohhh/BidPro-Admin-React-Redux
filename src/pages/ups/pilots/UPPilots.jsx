import React from "react";
import { Link } from "react-router-dom";
import UPSPilots from "../../../components/UPSPilots";
import { ReverseStringResults } from "../../../components/ReverseStringResults/ReverseStringResults";

export const UPPilots = () => {
  return (
    <div className="container">
      <h1>UPS - Pilots</h1>
      <UPSPilots />
      <ReverseStringResults />
      <Link to="/">Home</Link>
    </div>
  );
};
