import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBreakpointState {
  breakpoint: string;
  columns: boolean;
}
export interface IStateBreakpoint {
  breakpoint: IBreakpointState;
}
const initialState = {
  breakpoint: "",
  columns: true,
} as IBreakpointState;
export const breakpointState = initialState;
const breakpointSlice = createSlice({
  name: "breakpoint",
  initialState,
  reducers: {
    handlerBreakpoint(state, action: PayloadAction<string>) {
      state.breakpoint = action.payload;
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 200);
    },
    toggleColumns(state) {
      state.columns = !state.columns;
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 400);
    },
  },
});
export const { handlerBreakpoint, toggleColumns } = breakpointSlice.actions;
export default breakpointSlice.reducer;
