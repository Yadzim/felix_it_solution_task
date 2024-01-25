import { createSlice } from "@reduxjs/toolkit";

export interface IUi {theme: "flat" | "dark" | "light" | "blue", sidebar: "large" | "small" | "none"};

const defaultInitialState: IUi = {theme: "flat", sidebar: "none"};

const Ui = createSlice({
  name: "ui",
  initialState: defaultInitialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      localStorage.setItem('theme', payload);
      state.theme = payload
    },
    changeSidebar: (state, { payload }) => {
      sessionStorage.setItem("sidebar", payload)
      state.sidebar = payload
    },
  }
});


export const {changeTheme, changeSidebar} = Ui.actions;
export default Ui.reducer;