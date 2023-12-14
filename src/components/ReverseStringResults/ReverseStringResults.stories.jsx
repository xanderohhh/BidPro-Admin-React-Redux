import React from "react";
import { ReverseStringResults } from "./ReverseStringResults";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/ReverseStringResults",
  component: ReverseStringResults,
};

const Template = () => (
  //   <Provider store={store}>
  <Router>
    <ReverseStringResults />
  </Router>
  //   </Provider>
);
export const Default = Template.bind({});
