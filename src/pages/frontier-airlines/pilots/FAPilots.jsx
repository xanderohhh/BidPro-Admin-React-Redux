import React from "react";
import { Link } from "react-router-dom";
import ReverseStringValidation from "../../../components/ReverseStringValidation";

export const FAPilots = () => {
  return (
    <div className="container">
      <h1>Frontier Airlines - Pilots</h1>
      <ReverseStringValidation />
      <Link to="/">Home</Link>
    </div>
  );
};
