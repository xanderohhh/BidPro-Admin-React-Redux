import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBarDropDown } from "./NavBarDropDown";

export default {
  title: "Components/NavBarDropDown",
  component: NavBarDropDown,
};

const Template = (args) => (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container-fluid ps-0">
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <NavBarDropDown {...args} />
          </ul>
        </div>
      </div>
    </nav>
  </Router>
);

export const Default = Template.bind({});

Default.args = {
  airlineName: "Airline Name",
  bidTypesPath: "/airline/bidtypes",
  pilotsPath: "/airline/pilots",
};
