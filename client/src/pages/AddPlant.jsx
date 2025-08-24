import React, { useState, useContext } from "react";
import { addPlants } from "../api/plants";
import { AuthContext } from "../context/AuthContext";

const AddPlant = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [available, setAvailable] = useState(true);
  const [sunlight, setSunlight] = useState(false);
  const [wateringFrequency, setWateringFrequency] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const plantData = {
        name,
        price: Number(price),
        categories: categories.split(",").map((c) => c.trim()),
        available,
        sunlight,
        wateringFrequency: Number(wateringFrequency),
        description,
      };
      await addPlants(plantData, token);
      alert("Plant added successfully!");

      // Reset form
      setName("");
      setPrice("");
      setCategories("");
      setAvailable(true);
      setSunlight(false);
      setWateringFrequency("");
      setDescription("");
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          Add New Plant
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Plant Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Plant Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Price & Watering Frequency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Watering Frequency (days)
              </label>
              <input
                type="number"
                value={wateringFrequency}
                onChange={(e) => setWateringFrequency(e.target.value)}
                required
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Categories (comma-separated)
            </label>
            <input
              type="text"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              placeholder="Indoor, Outdoor, Medicinal..."
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Enter categories separated by commas
            </p>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={available}
                onChange={(e) => setAvailable(e.target.checked)}
                className="h-4 w-4 text-green-600"
              />
              <span className="text-sm text-gray-700">Available</span>
            </label>

            <label className="flex items-center space-x-2 mt-2 sm:mt-0">
              <input
                type="checkbox"
                checked={sunlight}
                onChange={(e) => setSunlight(e.target.checked)}
                className="h-4 w-4 text-green-600"
              />
              <span className="text-sm text-gray-700">Requires Sunlight</span>
            </label>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg transition duration-200"
          >
            Add Plant
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlant;
