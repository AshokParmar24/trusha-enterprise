import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";

const store = configureStore({
  reducer: {
    counter: userReducer,
  },
});

export default store;
