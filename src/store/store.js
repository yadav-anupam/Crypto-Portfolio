import { configureStore } from '@reduxjs/toolkit'
import walletReducer from './walletslice';
import watchlistReducer from './watchlistslice';
import currwallet from './currwalletslice';
import provider from './providerslice';

const store =  configureStore({
  reducer: {
    wallet : walletReducer,
    watchlist : watchlistReducer,
    currwallet : currwallet,
    provider : provider,
  },
})

export default store;