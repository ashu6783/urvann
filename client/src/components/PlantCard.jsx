// src/components/PlantCard.jsx
import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Box } from "@mui/material";

const PlantCard = ({ plant }) => {
  return (
    <Card sx={{ maxWidth: 345, height: "100%", display: "flex", flexDirection: "column" }}>
      {plant.image && (
        <CardMedia
          component="img"
          height="180"
          image={plant.image}
          alt={plant.name}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6">
          {plant.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ₹{plant.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {plant.description}
        </Typography>
        <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {plant.categories.map((cat) => (
            <Chip key={cat} label={cat} size="small" />
          ))}
        </Box>
        <Typography
          variant="body2"
          color={plant.available ? "green" : "red"}
          mt={1}
        >
          {plant.available ? "In Stock" : "Out of Stock"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlantCard;
