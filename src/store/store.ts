import { configureStore } from "@reduxjs/toolkit";

import { adminsReducer } from "../admin/slice/adminSlice";

export const store = configureStore({
  reducer: { admins: adminsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
