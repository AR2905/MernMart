import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../product/ProductSlice';
import authReducer from "../auth/authSlice"
import cartReducer from "../CART/CartSlice"
import orderReducer from '../Order/orderSlice';
import userReducer from '../User/userSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth : authReducer,
    cart : cartReducer,
    order : orderReducer,
    user : userReducer
  },
});