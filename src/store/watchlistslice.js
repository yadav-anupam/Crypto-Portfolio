import { createSlice } from "@reduxjs/toolkit";

const initialState = new Object();
const watchlistSlice = createSlice({
    name: "watchlist",
    initialState : initialState,
    reducers: {
        addtowatchlist : (state, action) => {
            const addr = action.payload["address"];
            const watch = action.payload["watchlist"];
            if(!state[addr]){
                state[addr] = watch;
            }
            else{
                state[addr] = state[addr].concat(watch);
            }
            console.log(`the value of address is ${addr} with ${typeof(addr)} and watchlist is ${watch} with ${typeof(watch)}`)
        },
        removefromwatchlist: (state , action) => {
            let address = action.payload["address"];
            let token = action.payload["token"];
            for (let t in state[address]) {
                console.log(`The value of t is ${t} and the value of state[address][t] is ${state[address][t]}`);
                if(state[address][t] == token){
                    state[address].splice(t,1);
                    console.log(`Removed from watchlist  ${token} from ${address}`);
                }
            }
            //console.log(`Removed from watchlist  ${token} from ${address}`);
            console.log(state[address]);
        }
    }
})

export const { addtowatchlist, removefromwatchlist } = watchlistSlice.actions;   
export default watchlistSlice.reducer;  