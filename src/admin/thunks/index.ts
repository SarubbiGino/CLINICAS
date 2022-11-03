import { createAsyncThunk } from "@reduxjs/toolkit";
import { AdminProps } from "../interfaces";
import { getAdmins, postAdmin, deleteAdmins } from "../service/index";

export const add = createAsyncThunk(
  "admin/post",
  async (data: AdminProps) => await postAdmin(data)
);

export const set = createAsyncThunk(
  "admins/get",
  async () => await getAdmins()
);

export const remove = createAsyncThunk(
  "admins/delete",
  async (ids: number[]) => await deleteAdmins(ids)
);
