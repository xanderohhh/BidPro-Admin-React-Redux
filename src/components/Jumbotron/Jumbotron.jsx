import React from "react";
import PropTypes from "prop-types";

/*
 * View Component that displays the Hello Message and Version
 */

export function Jumbotron({ administration, version }) {
  return (
    <div className="row jumbotron mt-3">
      {administration}
      {version}
    </div>
  );
}

//receiving admin and version from HeomePage.jsx
Jumbotron.propTypes = {
  administration: PropTypes.object,
  version: PropTypes.object,
};
