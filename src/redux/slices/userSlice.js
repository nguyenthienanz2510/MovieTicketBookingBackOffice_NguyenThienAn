import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../services/userService";

let initialState = {
  user: null,
  loading: false,
};

export const setUserLoginActionService = createAsyncThunk(
  () => "/userSlice/login",
  async (dataLogin) => {
    let result = await userService.postLogin(dataLogin);
    return result.data.content;
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserLogin: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: {
    // pending
    [setUserLoginActionService.pending]: (state, action) => {
      state.loading = true;
    },

    // success
    [setUserLoginActionService.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },

    // fail
    // [setUserLoginActionService.rejected]: (state, action) => {

    // }
  },
});

export default userSlice.reducer;
export const { setUserLogin } = userSlice.actions;
