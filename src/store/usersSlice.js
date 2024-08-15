/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

import {
  addUser,
  deleteUser,
  editUser,
  fetchUsers,
} from "../queryFn/users/users-query";

const initialState = {
  users: [],
  userInAction: {},
  isOpen: false,
  status: "idle",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.status = "loading";
      state.users = [];
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      state.users[index] = action.payload;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id != action.payload);
    });
  },
});

export const userAction = usersSlice.actions;
