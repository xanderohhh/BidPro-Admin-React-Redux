import React from "react";
import { Airline } from "../../components/Airline/Airline";
import { Jumbotron } from "../../components/Jumbotron/Jumbotron";
import { Administration } from "../../components/Administration/Administration";
import { Version } from "../../components/Version/Version";

export const HomePage = () => {
  return (
    <div className="container">

      <Jumbotron
        administration={<Administration name="Xander Oaks" />}
        version={<Version current="1.1.0" />}
      />
      <div className="row">
        <Airline
          name={"American Airlines"}
          path={"/american-airlines/bidtypes"}
        />
        <Airline name={"Alaska Airlines"} path={"/alaska-airlines/bidtypes"} />
        <Airline
          name={"Frontier Airlines"}
          path={"/frontier-airlines/bidtypes"}
        />
        <Airline name={"UPS"} path={"/ups/bidtypes"} />
      </div>
    </div>
  );
};
