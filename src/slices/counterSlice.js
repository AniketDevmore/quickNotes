import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "notes",
  initialState: {
    data: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.data.push(action.payload);
    },
    deleteNote: (state, action) => {
      let newData = state.data.filter((ele) => ele !== action.payload);

      state.data = newData;
    },
  },
});

export const { addNote, deleteNote } = counterSlice.actions;

export default counterSlice.reducer;
