import { createSlice } from "@reduxjs/toolkit";

interface FTProps {
  fullTime: boolean;
}

const initialState: FTProps = {
  fullTime: false,
};

export const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState,
  reducers: {
    setFullTime: (state, action) => {
      state.fullTime = action.payload;
    },
  },
});

export const { setFullTime } = toggleSlice.actions;
export default toggleSlice.reducer;
