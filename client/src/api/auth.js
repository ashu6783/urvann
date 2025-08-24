import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URI;
console.log(BASE_URL);

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