import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import bidTypeReducer from "./bidTypeSlice";
import reverseStringReducer from "./reverseStringSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    bidTypes: bidTypeReducer,
    reverseString: reverseStringReducer,
  },
});
