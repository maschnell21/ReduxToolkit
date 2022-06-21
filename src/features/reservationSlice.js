// import { createAsyncThunk, createSlice,PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from './counterAPI';

const initialState = {
  value: [],
  //    status: 'idle',
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  //the reducers are adding here
  reducers: {
    addReservation: (state, action) => {
      console.log("add");
      state.value.push(action.payload);
    },
    removeReservation:(state,action)=>{
        console.log("remove");
        state.value.splice(action.payload,1);
    }
  },
});
export const { addReservation , removeReservation} = reservationSlice.actions;
export const selectReservations = (state) => state.reservations.value;
export default reservationSlice.reducer;
