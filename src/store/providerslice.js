import { createSlice } from "@reduxjs/toolkit";

const providerSlice = createSlice({
    name : "provider",
    initialState : {},
    reducers : {
        addProvider : (state, action) => {
            state = action.payload;
        },
        removeProvider : (state, action) => {
            let index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }
})

export const { addProvider , removeProvider } = providerSlice.actions;
export default providerSlice.reducer ;