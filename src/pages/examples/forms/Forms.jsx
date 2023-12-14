import React, { useState } from "react";
import { Link } from "react-router-dom";
//import ContactInput from "../../../components/ContactInput";
import ContactValidationInput from "../../../components/ContactValidationInput";
import ContactOutput from "../../../components/ContactOutput";

export const Forms = () => {
  //Hook
  const [contactToDisplay, updateContact] = useState(null);

  //JavaScript
  const addContact = (contact) => {
    updateContact(contact);
  };

  //JSX
  return (
    <>
      <div className="container">
        <h1>Forms Examples</h1>
        <ContactValidationInput addContact={addContact} />
        <ContactOutput contact={contactToDisplay}/>
        <Link to="/">Home</Link>
        
      </div>
    </>
  );
};
