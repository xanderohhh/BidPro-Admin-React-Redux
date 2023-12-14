import React from "react";
import { Link } from "react-router-dom";
import SimpleCounter from "../../../components/SimpleCounter";
import { PilotsList } from "../../../components/PilotsList/PilotsList";

export const AAPilots = () => {
  return (
    <div className="container">
      <h1> American Airlines - Pilots</h1>
      <SimpleCounter />
      <Link to="/">Home</Link>
      <hr />
      <PilotsList
      pilotData={[
        {
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
        },
        {
          id: 2,
          airline: "Airline Name",
          fleet: "00B",
          seat: "First Mate",
          domicile: "SEA",
          firstName: "Hope",
          lastName: "Oaks",
          email: "hopeoaks@gmail.com",
          areacode: "3851231234",
          prefix: "Dr.",
          suffix: "",
          address1: "123 My Street",
          address2: "Suit 1",
          city: "Spokane",
          state: "Washington",
          postalCode: "99205",
        },
        {
          id: 3,
          airline: "Airline Name",
          fleet: "00C",
          seat: "Flight Attendant",
          domicile: "SEA",
          firstName: "Elizabeth",
          lastName: "Oaks",
          email: "beezelouise@gmail.com",
          areacode: "3851231234",
          prefix: "Dr.",
          suffix: "III",
          address1: "123 My Street",
          address2: "Suit 1",
          city: "Spokane",
          state: "Washington",
          postalCode: "99205",
        },
        {
          id: 4,
          airline: "Airline Name",
          fleet: "00C",
          seat: "Flight Attendant",
          domicile: "SEA",
          firstName: "Emilia",
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
        },
      ]

      } />
    </div>
  );
}; 
