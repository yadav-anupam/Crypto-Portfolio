import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
    name: "wallet",
    initialState : [],
    reducers: {
        addwallet : (state, action) => {
            state.push(action.payload);
        },
        removewallet: (state , action) => {
            let index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }
})

export const { addwallet, removewallet } = walletSlice.actions;   
export default walletSlice.reducer ;  