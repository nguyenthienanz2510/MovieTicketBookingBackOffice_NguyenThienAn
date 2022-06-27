import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  number: 100,
};

const demoSlice = createSlice({
  name: "demoSlice",
  initialState,
  reducers: {
    tangSoLuong: (state, action) => {
      state.number += action.payload;
    },
    giamSoLuong: (state, action) => {
      state.number -= action.payload;
    },
  },
});

export default demoSlice.reducer;

export const { tangSoLuong, giamSoLuong } = demoSlice.actions;
