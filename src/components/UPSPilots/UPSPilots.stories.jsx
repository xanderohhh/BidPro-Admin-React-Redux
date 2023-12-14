import React from "react";
import { UPSPilots } from "./UPSPilots";
import { BrowserRouter as Router } from "react-router-dom";
import { ReverseStringResults } from "../ReverseStringResults/ReverseStringResults";

export default {
  title: "Components/UPSPilots",
  component: UPSPilots,
};

const Template = () => (
  //   <Provider store={store}>
  <Router>
    <UPSPilots />
  </Router>
  //   </Provider>
);
export const Default = Template.bind({});
