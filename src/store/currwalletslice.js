import { createSlice } from "@reduxjs/toolkit";

const currwalletSlice = createSlice({
    name: "currwallet",
    initialState : [],
    reducers: {
        addcurrwallet : (state, action) => {
            state.pop();
            state.push(action.payload);
        },
    }
})

export const { addcurrwallet  , removeCurrWallet} = currwalletSlice.actions;
export default currwalletSlice.reducer ;