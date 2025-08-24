import React, { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Leaf, Eye, LogIn, Plus } from "lucide-react";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        p: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <Leaf size={48} color="#4caf50" />
        <Typography 
          variant="h3" 
          sx={{ 
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: "bold" 
          }}
        >
          Welcome to Urvann Plant Store
        </Typography>
      </Box>
      
      <Typography 
        variant="h6" 
        color="text.secondary" 
        gutterBottom
        sx={{
          fontSize: { xs: "1.1rem", md: "1.25rem" },
          maxWidth: "600px",
          px: 1
        }}
      >
        Browse, search, and filter plants easily. Admins can add new plants to the store.
      </Typography>

      <Box 
        sx={{ 
          mt: 3, 
          display: "flex", 
          flexDirection: { xs: "column", sm: "row" },
          gap: 2, 
          justifyContent: "center",
          width: { xs: "100%", sm: "auto" },
          maxWidth: { xs: "300px", sm: "none" }
        }}
      >
        <Button 
          component={Link} 
          to="/plants" 
          variant="contained" 
          color="primary"
          startIcon={<Eye size={20} />}
          sx={{ py: { xs: 1.5, md: 1 } }}
        >
          View All Plants
        </Button>

        {!user && (
          <Button 
            component={Link} 
            to="/login" 
            variant="outlined" 
            color="primary"
            startIcon={<LogIn size={20} />}
            sx={{ py: { xs: 1.5, md: 1 } }}
          >
            Login / Register
          </Button>
        )}

        {user && user.role === "admin" && (
          <Button 
            component={Link} 
            to="/add-plant" 
            variant="contained" 
            color="secondary"
            startIcon={<Plus size={20} />}
            sx={{ py: { xs: 1.5, md: 1 } }}
          >
            Add New Plant
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Home;