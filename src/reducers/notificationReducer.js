import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "Notifications",
  initialState,
  reducers: {
    voteNotification(state, action) {
      console.log("mentiin tänne");
      const notification = action.payload;
      return `${notification} was voted`;
    },
    addingNotification(state, action) {
      const notification = action.payload;
      return `${notification} was added`;
    },
    clearNotification() {
      const notification = "";
      return notification;
    },
  },
});

export const { voteNotification, addingNotification, clearNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
