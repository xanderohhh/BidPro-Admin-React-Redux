import React from "react";
import PropTypes from "prop-types";
import { NavBarDropDown } from "../NavBarDropDown/NavBarDropDown";
import { Link } from "react-router-dom";

/*
 * Interactive Component that displays the nav bar
 */

export const NavBar = ({ dropDowns }) => {
  return (
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav"></ul>
      {dropDowns.map((args, i) => {
        return <NavBarDropDown key={i} {...args} />;
      })}
    </div>
  );
};

//receiving dropDowns from Header.jsx
NavBar.propTypes = {
  dropDowns: PropTypes.arrayOf(
    PropTypes.shape({
      airlineName: PropTypes.string,
      bidTypesPath: PropTypes.string,
      pilotsPath: PropTypes.string,
    })
  ),
};
