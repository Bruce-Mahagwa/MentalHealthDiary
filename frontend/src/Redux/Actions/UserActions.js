// dependencies
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk("users/register", async ({ userName, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/register", {
        "userName": userName, "email": email, "password": password
      })
      localStorage.setItem("userInfo", JSON.stringify(data.data))
      if (data?.message) {
        window.location.href = "/home";
      }
      return data; 
    }
    catch (e) {
      if (e.reponse.data.error) {
        return rejectWithValue(e.response.data.error);
      }
    }
  })

  export const logoutUser = createAsyncThunk("users/logout", async (_, { rejectWithValue }) => {
    try {
      await axios.get("/users/user/logout")
      localStorage.removeItem("userInfo");
      document.location.href = "/";
    }
    catch (e) {
      if (e.response.data.error) {
        console.log(e)
        return rejectWithValue(e.response.data.error)
      } 
    }
  })

  export const loginUser = createAsyncThunk("users/login", async ({ userName, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", { "userName": userName, "password": password});
      localStorage.setItem("userInfo", JSON.stringify(data.data))
      if (data?.message) {
        window.location.href = "/home";
      }
      return data;
    }
    catch (e) {
      if (e.response.data.error) {
        return rejectWithValue(e.response.data.error);
      }
    }
  })
  