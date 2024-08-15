import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState : [],
    reducers: {
        addtowatchlist : (state, action) => {
            state.push(action.payload);
        },
        removefromwatchlist: (state , action) => {
            let index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }
})

export const { addtowatchlist, removefromwatchlist } = watchlistSlice.actions;   
export default watchlistSlice.reducer;  