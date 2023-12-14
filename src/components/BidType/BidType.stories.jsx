import React from "react";
import { BidType } from "./BidType";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/BidType",
  component: BidType,
};

const Template = (args) => (
  <Router>
    <table class="table table-striped bidTypesTable">
      <BidType {...args} />
    </table>
  </Router>
);
export const Default = Template.bind({});

Default.args = {
  bidType: {
    id: 1,
    fleet: "00A",
    seat: "Captain",
    domicile: "SEA",
    status: "Current",
    numBidPeriods: 1,
    lastImported: new Date().toDateString(),
  },
};
