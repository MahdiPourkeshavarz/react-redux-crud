/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpsRequest } from "../services/htppRequest";

const initialState = {
  users: [],
  userInAction: {},
  isOpen: false,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await httpsRequest.get("/users");
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const editUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, updatedUser }) => {
    const response = await httpsRequest.patch(`/users/${id}`, updatedUser);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  const response = await httpsRequest.delete(`/usres/${id}`);
  return id;
});

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const response = await httpsRequest.post("/users", {
    ...user,
    id: crypto.randomUUID(),
  });
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
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
