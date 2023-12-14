import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Interactive Component That Displays Bid Types
 */

export const Pilot = ({
  id,
  airline,
  fleet,
  seat,
  domicile,
  firstName,
  lastName,
  email,
  areacode,
  prefix,
  suffix,
  address1,
  address2,
  city,
  state,
  postalCode,
}) => {
  const phoneNumber = () => toast(areacode);
  const emailToast = () => toast(email)


  return (
    <div className="col-4">
      <div className="card mb-2">
        <img
          className="card-img-top"
          src="https://media.licdn.com/dms/image/D5603AQEKu0ahzzKk1Q/profile-displayphoto-shrink_800_800/0/1697484802041?e=2147483647&v=beta&t=cGHBnoLzY1jDy6wneshGaLLM_ytJMPitLb_jskaGlHo"
          alt="Card image cap"
        />
        <div className="card-body">
          <h3 className="card-text" id="name">
            {prefix + " " + firstName + " " + lastName + " " + suffix}
          </h3>
          <p className="card-text mb-1" id="job-title">
            {seat}
          </p>
          <a href="/" className="card-text">
            {email}
          </a>
          <p className="card-text mt-2">{airline + " - " + domicile + " " + fleet}</p>
          <p className="card-text">{address1 + " " +address2}</p>
          <p className="card-text">{city + ", " + state + " " + postalCode}</p>
          <hr />
          <div className="row d-flex justify-content-around">
            <div className="col-auto">
              <button className="pilotButtons" onClick={phoneNumber}>&#128222;</button>
              <ToastContainer position="top-center"/>
            </div>
            <div className="col-auto">
            <button className="pilotButtons" onClick={phoneNumber}>&#128172;</button>
              <ToastContainer position="top-center"/>
            </div>
            <div className="col-auto">
            <button className="pilotButtons" onClick={emailToast}>&#9993;</button>
              <ToastContainer position="top-center"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// receiving BidType from BidTypesList
Pilot.propTypes = {
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
};
