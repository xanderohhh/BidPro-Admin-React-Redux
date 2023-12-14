import React, { useState } from "react";

export const SimpleAddition = () => {
  /*
  Hooks
  */
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState("?");

  /*
  javascript code
  */
  const displaySum = () => {
    setSum(Number(num1) + Number(num2));
  };

  const clearSum = () => {
    setNum1("")
    setNum2("")
    setSum("?")
  };

  /*
  JSX
  */
  return (
    <>
      <div className="row">
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            placeholder="0"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div className="col-1 display-6">+</div>
        <div className="col-2 display-6">
          <input
            type="text"
            className="form-control"
            placeholder="0"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div className="col-1 display-6">=</div>
        <div className="col-1 display-6">{sum}</div>
        <div className="col-2 d-grid">
          <button className="btn btn-primary" onClick={displaySum}>
            Calculate
          </button>
        </div>
        <div className="col-2 d-grid">
          <button className="btn btn-danger" onClick={clearSum}>Clear</button>
        </div>
      </div>
    </>
  );
};
