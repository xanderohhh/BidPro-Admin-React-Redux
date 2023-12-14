import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addReverseString } from "../../redux/reverseStringSlice";

export const ReverseString = () => {
  /*
  Hooks
  */
  const [originalString, setOriginalString] = useState("");
  const [reversedString, setReversedString] = useState("");

  /*
  javascript code
  */

  const displayReverseString = () => {
    const reversed = originalString.split("").reverse().join("");
    setReversedString(reversed);

    // const isPalindrome = originalString === reversed
    // // Dispatch action to add to Redux store
  };
  const clearAll = () => {
    //Sets both
    setOriginalString("");
    setReversedString("");
  };

  /*
  JSX
  */
  return (
    <>
      <h1>test</h1>
      <form className="needs-validation" noValidate>
        <div className="form">
          <div className="col-auto">
            <h1>Reverse String</h1>
            <div className="input-group mb-2 has-validation">
              <div className="input-group-prepend">
                <div className="input-group-text">Original String</div>
              </div>
              <input
                type="text"
                className="form-control"
                value={originalString}
                onChange={(e) => setOriginalString(e.target.value)}
              />
            </div>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">Reversed String</div>
              </div>
              <input
                type="text"
                className="form-control"
                value={reversedString}
                readOnly
              />
            </div>
          </div>
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-primary"
              onClick={displayReverseString}
            >
              Display
            </button>
            <button
              type="button"
              className="btn btn-danger mx-1"
              onClick={clearAll}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
