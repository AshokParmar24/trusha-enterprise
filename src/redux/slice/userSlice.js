import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetail: null,

};

const userSlice =createSlice({
    name:"user",
    initialState,
    reducers:{
        fetchUser:(state,action)=>{
            state?.userDetail= action?.payload?.userDetail
        }
    }
})

export const { fetchUser } = userSlice.actions;
export default userSlice.reducer;
