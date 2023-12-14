import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reverseStrings: [
    {
      originalString: "Hello World",
      reversedString: "dlroW olleH",
      isPalindrome: false,
    },
    {
      originalString: "kayak",
      reversedString: "kayak",
      isPalindrome: true,
    },
    {
      originalString: "my gym",
      reversedString: "myg ym",
      isPalindrome: true,
    },
    {
      originalString: "Love React",
      reversedString: "tcaeR evoL",
      isPalindrome: false,
    },
    {
      originalString: "mom",
      reversedString: "mom",
      isPalindrome: true,
    },
  ],
};

export const reverseStringSlice = createSlice({
  name: "reverseString",
  initialState,
  reducers: {
    addReverseString: (state, action) => {
      // console.log("called addBidType");
      state.reverseStrings.push(action.payload);
    },
  },
});

export const { addReverseString } = reverseStringSlice.actions;

export const selectReverseString = (state) =>
  state.reverseString.reverseStrings;

export default reverseStringSlice.reducer;
