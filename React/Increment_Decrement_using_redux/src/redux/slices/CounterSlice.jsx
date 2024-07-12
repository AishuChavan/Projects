import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:0
}
const CounterSlice=createSlice({
    //3step first variable 2)initial state 3)function=>reducers
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        }
    }
})
//we have to return fun for that we do destructuring and then using action we take funtion
export const{increment,decrement}=CounterSlice.actions;

export default CounterSlice.reducer;