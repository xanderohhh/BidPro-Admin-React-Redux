import React from "react";
import { useSelector } from "react-redux";
import { selectReverseString } from "../../redux/reverseStringSlice";
/**
 * View Component That Displays Bid Types Page
 */
export const ReverseStringResults = () => {
  const reverseStrings = useSelector(selectReverseString);

  return (
    <div className="flex-container">
      <h1>Reverse String Results</h1>
      <ul className="list-group">
        {reverseStrings.map((item, index) => (
          <li key={index} className="list-group-item">
            <div className="flex-row originalString">
              {index + 1}. Original String: {item.originalString}
              <span className="badge bg-primary">
                {item.isPalindrome ? "P" : ""}
              </span>
            </div>
            <div className="flex-row">
              Reversed String: {item.reversedString}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
