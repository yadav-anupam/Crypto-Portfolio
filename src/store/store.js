import { configureStore } from '@reduxjs/toolkit'
import walletReducer from './walletslice';
import watchlistReducer from './watchlistslice';

const store =  configureStore({
  reducer: {
    wallet : walletReducer,
    watchlist : watchlistReducer
  },
})

export default store;