import React from "react";
import { NavBar } from "./NavBar";
// import { NavBarDropDown } from "../NavBarDropDown/NavBarDropDown";
// import { Logo } from "../Logo/Logo";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/NavBar",
  component: NavBar,
};

const Template = (args) => (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container-fluid ps-0">
        <NavBar {...args} />
      </div>
    </nav>
  </Router>
);
export const Default = Template.bind({});
Default.args = {
  dropDowns: [
    {
      airlineName: "American Airlines",
      bidTypesPath: "/american-airlines/bidtypes",
      pilotsPath: "/american-airlines/pilots",
    },
    {
      airlineName: "Alaska Airlines",
      bidTypesPath: "/alaska-airlines/bidtypes",
      pilotsPath: "/alaska-airlines/pilots",
    },
  ],
};
