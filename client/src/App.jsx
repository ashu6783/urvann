import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AddPlant from "./pages/AddPlant";
import PlantDetails from "./pages/PlantDetails";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";
import PlantsPage from "./pages/PlantsPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plants/:id" element={<PlantDetails />} />
          <Route path="/plants" element={<PlantsPage />} />

          {/* Protected/Admin Routes */}
          <Route
            path="/add-plant"
            element={
              <ProtectedRoutes>
                <AddPlant />
              </ProtectedRoutes>
            }
          />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;