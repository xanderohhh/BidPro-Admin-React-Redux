import React from "react";
import PropTypes from "prop-types";

/*
*View component that displays the admin header and hello
*/

export function Version({current}) {
  return (
    <div className="col-xs-6 col-lg-4">
      <h1 className="display-3">{current}</h1>
      <p className="text-muted">Version</p>
    </div>
  );
}

Version.propTypes = {
    current: PropTypes.string,
};
