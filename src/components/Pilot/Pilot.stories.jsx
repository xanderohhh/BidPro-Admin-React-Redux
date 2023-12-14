import { Pilot } from "./Pilot";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/Pilot",
  component: Pilot,
}

const Template = (args) => (
  <Router>
  
      <Pilot {...args}/>
    
  </Router>
);
export const Default = Template.bind({});

Default.args = {
  id: 1,
  airline: "Airline Name",
  fleet: "00A",
  seat: "Captain",
  domicile: "SEA",
  firstName: "Xander",
  lastName: "Oaks",
  email: "xanderoaksofficial@gmail.com",
  areacode: "3851231234",
  prefix: "Dr.",
  suffix: "III",
  address1: "123 My Street",
  address2: "Suit 1",
  city: "Spokane",
  state: "Washington",
  postalCode: "99205",
};

