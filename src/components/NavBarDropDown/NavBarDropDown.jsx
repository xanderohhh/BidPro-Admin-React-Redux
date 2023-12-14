import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/*
 * Interactive Component for Nav Bar Drop Down
 */

export const NavBarDropDown = ({ airlineName, bidTypesPath, pilotsPath }) => {
  return (
    <li className="nav-item dropdown d-inline-block">
      <a
        className="nav-link dropdown-toggle text-light mx-2"
        href="/"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {airlineName}
      </a>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropDown"
      >
        <li>
          <Link className="dropdown-item" to={bidTypesPath}>
            BidTypes
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to={pilotsPath}>
            Pilots
          </Link>
        </li>
      </ul>
    </li>
  );
};

//Receiving parameters from NavBar.jsx
NavBarDropDown.propTypes = {
  airlineName: PropTypes.string,
  bidTypesPath: PropTypes.string,
  pilotsPath: PropTypes.string, 
}
