import React from "react";
import { BidTypesList } from "./BidTypesList";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

export default {
  title: "Components/BidTypesList",
  component: BidTypesList,
};

//Mock up our Redux store
const store = {
  getState: () => {
    return {
      bidTypes: [],
    };
  },
  subscribe: () => 0,
};

const Template = (args) => (
  <Provider store={store}>
    <Router>
    <BidTypesList {...args} />
    </Router>
  </Provider>
);
export const Default = Template.bind({});
Default.args = {
  bidTypes: [
    {
      id: 1,
      airline: "AA",
      fleet: "73G",
      seat: "Captain",
      domicile: "SEA",
      status: "Current",
      numBidPeriods: 1,
      lastImported: new Date().toDateString(),
    },
    {
      id: 2,
      airline: "AA",
      fleet: "737",
      seat: "First Officer",
      domicile: "SEA",
      status: "Current",
      numBidPeriods: 1,
      lastImported: new Date().toDateString(),
    },
    {
      id: 3,
      airline: "AA",
      fleet: "736",
      seat: "First Officer",
      domicile: "SLC",
      status: "Current",
      numBidPeriods: 2,
      lastImported: new Date().toDateString(),
    },
  ],
};
