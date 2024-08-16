import { configureStore } from "@reduxjs/toolkit";
// import { usersSlice } from "./usersSlice";
import usersApi from "./userSlice-rtkquery";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // users : usersSlice.reducer
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware);
  },
});

setupListeners(store.dispatch);
