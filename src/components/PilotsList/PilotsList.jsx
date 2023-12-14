import React from "react";
import PropTypes from "prop-types";
import { Pilot } from "../Pilot/Pilot";

/**
 * View Component That Displays Bid Types Page
 */
export const PilotsList = ({pilotData}) => {
  return (
    <div className="container-fluid">
      <h1>Pilots</h1>
      <div className="row">
        {pilotData.map((args, i) => {
          return <Pilot key={i} {...args} />;
        })}
      </div>
    </div>
  );
};

//receiving bidTypeData from AABidTypes.jsx
PilotsList.propTypes = {
  bidTypeData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      airline: PropTypes.string,
      fleet: PropTypes.string,
      seat: PropTypes.string,
      domicile: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      areacode: PropTypes.string,
      prefix: PropTypes.string,
      suffix: PropTypes.string,
      address1: PropTypes.string,
      address2: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      postalCode: PropTypes.string,
    })
  ),
};
