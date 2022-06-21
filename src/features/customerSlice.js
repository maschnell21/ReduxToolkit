// import { createAsyncThunk, createSlice,PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from './counterAPI';

const initialState = {
  value:[],
  //    status: 'idle',
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  //the reducers are adding here
  reducers: {
addCustomer:(state,action)=>{
    console.log("add");
state.value.push(action.payload);
},

addFoodToCustomer:(state,action)=>{
    console.log("addfood")
    state.value.forEach((customer =>{
        if(customer.id===action.payload.id){
            customer.food.push(action.payload.food)
        }
    }))
}
  },
});
export const {addCustomer,addFoodToCustomer} = customerSlice.actions;
export const selectcustomers = (state) => state.customers.value;
export default customerSlice.reducer;
