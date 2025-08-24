import { useState, useEffect, useCallback } from "react";
import {
  getAllPlants as apiGetAllPlants,
  getPlantById as apiGetPlantById,
  searchPlants as apiSearchPlants,
  addPlant as apiAddPlant,
  updatePlant as apiUpdatePlant,
} from "../api/plants";

export const usePlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllPlants = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiGetAllPlants();
      setPlants(res.data);
    } catch (err) {
      setError(err.message || "Failed to fetch plants");
    } finally {
      setLoading(false);
    }
  }, []);

  const getPlantById = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiGetPlantById(id);
      return res.data;
    } catch (err) {
      setError(err.message || "Failed to fetch plant");
    } finally {
      setLoading(false);
    }
  }, []);

  const search = useCallback(async (query) => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiSearchPlants(query);
      setPlants(res.data);
    } catch (err) {
      setError(err.message || "Failed to search plants");
    } finally {
      setLoading(false);
    }
  }, []);


  const add = useCallback(async (plantData, token) => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiAddPlant(plantData, token);
      setPlants((prev) => [...prev, res.data]);
      return res.data;
    } catch (err) {
      setError(err.message || "Failed to add plant");
    } finally {
      setLoading(false);
    }
  }, []);

  const update = useCallback(async (id, plantData, token) => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiUpdatePlant(id, plantData, token);
      setPlants((prev) =>
        prev.map((plant) => (plant._id === id ? res.data : plant))
      );
      return res.data;
    } catch (err) {
      setError(err.message || "Failed to update plant");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    plants,
    loading,
    error,
    getAllPlants,
    getPlantById,
    search,
    add,
    update,
  };
};
