import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice"
import instituteSlice  from "./institute/instituteSlice";
import categorySlice from "./category/categorySlice"
export const makeStore = () => {
    return configureStore({
      reducer: {
        auth: authSlice,
        institute:instituteSlice,
        category: categorySlice
  
      },
    })
  }



  // Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']