import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoading: false,
};

let spinnerSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setSpinnerStarted: (state, action) => {
      console.log("isloading start");
      state.isLoading = true;
    },
    setSpinnerEnded: (state, action) => {
      console.log("isloading end");
      state.isLoading = false;
    },
  },
});

export const { setSpinnerStarted, setSpinnerEnded } = spinnerSlice.actions;
export default spinnerSlice.reducer;
