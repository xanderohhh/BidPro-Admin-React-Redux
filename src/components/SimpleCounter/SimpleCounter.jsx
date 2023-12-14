import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment, decrement } from "../../redux/counterSlice"

export const SimpleCounter = () => {
  /*
  Hooks
  */

  const initialCount = useSelector(selectCount)
  const dispatch = useDispatch();
  const [count, setCount] = useState(initialCount);

  /*
  javascript code
  */
  const addNumber = () => {
    //add number to counter
    dispatch(increment());
    setCount(count + 1);
  };

  const subtractNumber = () => {
    //subtract number from counter
    dispatch(decrement());
    setCount(count - 1)
  };

  /*
  JSX
  */
  return (
    <>
      <div className="row">
        <div className="col display-6">Counter: {count}</div>
        <div className="col-1">
          <button className="btn btn-primary" onClick={addNumber}>
            +
          </button>
        </div>
        <div className="col-1">
          <button className="btn btn-primary" onClick={subtractNumber}>
            -
          </button>
        </div>
      </div>
    </>
  );
};
