import { createSlice } from "@reduxjs/toolkit";

interface Modal {
  modalDeleteItem: boolean,
  modalDeleteAll: boolean
}



const initialState: Modal = {
  modalDeleteItem: false,
  modalDeleteAll: false,
};


const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModalDeleteItem(state) {
        state.modalDeleteItem = !state.modalDeleteItem
    },
    
    toggleModalDeleteAll(state) {
        state.modalDeleteAll = !state.modalDeleteAll
    },
  },
});

export const { toggleModalDeleteItem, toggleModalDeleteAll } = modalSlice.actions;

export default modalSlice.reducer;
