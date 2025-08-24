import React, { useEffect, useState } from "react";
import PlantGrid from "../components/PlantGrid";
import { getPlants } from "../api/plants";

const PlantsPage = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch]= useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(()=>{
    const handler = setTimeout(()=>{
      setDebouncedSearch(searchTerm);
    },300);
    return ()=>{
      clearTimeout(handler);
    }
  },[searchTerm]);

  useEffect(() => {
    const fetchPlants = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getPlants();
        const allPlants = res.data;

        setPlants(allPlants);
        setFilteredPlants(allPlants);

        const uniqueCategories = Array.from(
          new Set(allPlants.flatMap((p) => p.categories || []))
        );
        setCategories(uniqueCategories);
      } catch (err) {
        setError(err.message || "Failed to fetch plants");
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  useEffect(() => {
    let results = plants;

    if (debouncedSearch) {
      results = results.filter((p) =>
        p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }
    if (categoryFilter !== "all") {
      results = results.filter((p) =>
        (p.categories || []).includes(categoryFilter)
      );
    }

    setFilteredPlants(results);
  }, [debouncedSearch, categoryFilter, plants]);

  if (loading)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-green-600 text-lg font-medium">Loading Plants...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg font-medium">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen">
      <div className="sticky top-16 bg-white z-40 border-b border-gray-200 shadow-sm">
        <div className="p-4 flex flex-wrap gap-4 max-w-7xl mx-auto">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 min-w-[200px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-colors"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="min-w-[150px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-colors bg-white"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-4">
        <PlantGrid plants={filteredPlants} />
      </div>
    </div>
  );
};

export default PlantsPage;