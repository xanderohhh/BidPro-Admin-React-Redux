import React from "react";
import { Jumbotron } from "./Jumbotron";
import { Administration } from "../Administration/Administration";
import { Version } from "../Version/Version";

export default {
  title: "Components/Jumbotron",
  component: Jumbotron,
};

const Template = (args) => (
  <div className="container">
    <Jumbotron {...args} />
  </div>
);
export const ExampleWithComponents = Template.bind({});
ExampleWithComponents.args = {
  administration: <Administration name="Xander Oaks" />,
  version: <Version current="1.0.1" />,
};
