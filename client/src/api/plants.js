import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const getPlants = () => axios.get(`${BASE_URL}/plants`);

export const getPlantById = (id) => axios.get(`${BASE_URL}/plants/${id}`);

export const addPlants = (plantData, token) =>
  axios.post(`${BASE_URL}/plants`, plantData, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updatePlant = (id, plantData, token) =>
  axios.put(`${BASE_URL}/plants/${id}`, plantData, {
    headers: { Authorization: `Bearer ${token}` },
  });
