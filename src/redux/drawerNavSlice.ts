import { createSlice } from "@reduxjs/toolkit";

export interface IDrawerNavState {
  openNav: boolean;
}
export interface IStateDrawerNav {
  drawerNav: IDrawerNavState;
}
const initialState = {
  openNav: false,
} as IDrawerNavState;

const drawerNavSlice = createSlice({
  name: "drawerNav",
  initialState,
  reducers: {
    toggleOpenNav(state){
      state.openNav = !state.openNav
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 500);
    },
  },
});
export const {toggleOpenNav} = drawerNavSlice.actions;
export default drawerNavSlice.reducer