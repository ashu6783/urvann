// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   getPlantById
// } from "../api/plants";
// import {
//   Typography,
//   Paper,
//   Grid,
//   Checkbox,
//   CircularProgress,
// } from "@mui/material";

// const PlantDetails = () => {
//   const { id } = useParams();
//   const [plant, setPlant] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPlant = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await getPlantById(id);
//         setPlant(res.data);
//       } catch (err) {
//         setError(err.message || "Failed to fetch plant");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPlant();
//   }, [id]);

//   if (loading) return <CircularProgress />;
//   if (error) return <Typography color="error">{error}</Typography>;
//   if (!plant) return <Typography>No plant found</Typography>;

//   return (
//     <Paper sx={{ p: 3, maxWidth: 600, margin: "20px auto" }}>
//       <Typography variant="h4" gutterBottom>
//         {plant.name}
//       </Typography>
//       <Typography variant="h6">Price: ${plant.price}</Typography>
//       <Typography>
//         Categories: {plant.categories.join(", ")}
//       </Typography>
//       <Grid container spacing={2} sx={{ mt: 2 }}>
//         <Grid item>
//           <Typography>Available:</Typography>
//           <Checkbox checked={plant.available} disabled />
//         </Grid>
//         <Grid item>
//           <Typography>Sunlight:</Typography>
//           <Checkbox checked={plant.sunlight} disabled />
//         </Grid>
//         <Grid item>
//           <Typography>Watering Frequency: {plant.wateringFrequency} days</Typography>
//         </Grid>
//       </Grid>
//       <Typography sx={{ mt: 2 }}>Description: {plant.description}</Typography>
//     </Paper>
//   );
// };

// export default PlantDetails;
import React from 'react'

const PlantDetails = () => {
  return (
    <div>PlantDetails</div>
  )
}

export default PlantDetails
