import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const registerUser = (userData) =>
  axios.post(`${BASE_URL}/auth/register`, userData);

export const loginUser = (userData) =>
  axios.post(`${BASE_URL}/auth/login`, userData);

export const logoutUser = (token) =>
  axios.post(
    `${BASE_URL}/auth/logout`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );