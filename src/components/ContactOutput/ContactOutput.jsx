import React from "react";
import PropTypes from "prop-types";

export const ContactOutput = ({ contact }) => {
  return (
    <>
      <div className={contact ? "card mt-3" : ""}>
        <p>{contact ? contact.name : ""}</p>
        <p>{contact ? contact.email : ""}</p>
        <p>{contact ? contact.phonenumber : ""}</p>
      </div>
    </>
  );
};

//receiving contact from Forms.jsx
ContactOutput.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phonenumber: PropTypes.string,
  }),
};
