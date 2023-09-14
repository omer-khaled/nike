import {configureStore} from '@reduxjs/toolkit';
import { productReducer } from './productSlice';
import { cartReducer } from './cartSlice';
const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer
    }
});
const reducer = store.getState();
export type AppDispatch = typeof store.dispatch;
export type AppReducer = typeof reducer;
export  {store};