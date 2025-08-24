import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Typography,
} from "@mui/material";

const PlantTable = ({ plants }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price (₹)</TableCell>
            <TableCell>Categories</TableCell>
            <TableCell>Available</TableCell>
            <TableCell>Sunlight</TableCell>
            <TableCell>Watering Frequency (days)</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plants.map((plant) => (
            <TableRow key={plant._id}>
              <TableCell>
                <Typography variant="subtitle2">{plant.name}</Typography>
              </TableCell>
              <TableCell>{plant.price}</TableCell>
              <TableCell>
                {plant.categories.map((cat) => (
                  <Chip
                    key={cat}
                    label={cat}
                    size="small"
                    sx={{ mr: 0.5, mb: 0.5 }}
                  />
                ))}
              </TableCell>
              <TableCell>
                {plant.available ? "Yes" : "No"}
              </TableCell>
              <TableCell>
                {plant.sunlight ? "Yes" : "No"}
              </TableCell>
              <TableCell>{plant.wateringFrequency}</TableCell>
              <TableCell>{plant.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlantTable;
