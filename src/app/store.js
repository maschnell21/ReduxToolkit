import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import reservationSlice from "../features/reservationSlice";
import customerSlice from "../features/customerSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationSlice,
    customers:customerSlice,
  },
});
