import { createSlice } from "@reduxjs/toolkit";

const initialState = new Object();
const watchlistSlice = createSlice({
    name: "watchlist",
    initialState : initialState,
    reducers: {
        addtowatchlist : (state, action) => {
            const addr = action.payload["address"];
            const watch = action.payload["watchlist"];

            console.log(`the value of address is ${addr} with ${typeof(addr)} and watchlist is ${watch} with ${typeof(watch)}`)
            state[addr] = watch;
        },
        removefromwatchlist: (state , action) => {
            let index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }
})

export const { addtowatchlist, removefromwatchlist } = watchlistSlice.actions;   
export default watchlistSlice.reducer;  