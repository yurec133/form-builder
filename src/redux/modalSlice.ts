import { createSlice } from "@reduxjs/toolkit";

export interface IModalState {
  modalFullItem: boolean;
}
export interface IStateModal {
  modal: IModalState;
}

const initialState = {
  modalFullItem: false,
} as IModalState;

const modalSlice = createSlice({
  name: "Modals",
  initialState,
  reducers: {
    modalFullItemOpen(state) {
      state.modalFullItem = true;
    },
    modalFullItemClose(state) {
      state.modalFullItem = false;
    },
  },
});
export const { modalFullItemOpen, modalFullItemClose } = modalSlice.actions;
export default modalSlice.reducer;
