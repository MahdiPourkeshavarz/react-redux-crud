import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpsRequest } from "../../services/htppRequest";
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
