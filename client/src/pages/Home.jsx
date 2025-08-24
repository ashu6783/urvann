import React, { useContext } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
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
        gap: 3,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Leaf size={48} color="#4caf50" />
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: "bold",
          }}
        >
          Welcome to Urvann Plant Store
        </Typography>
      </Box>

      {/* Sub Text */}
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          fontSize: { xs: "1.1rem", md: "1.25rem" },
          maxWidth: "650px",
        }}
      >
        Browse, search, and filter plants easily. Admins can also add new plants to the store.
      </Typography>

      {/* Info / Welcome Box */}
      {!user && (
        <Paper
          elevation={2}
          sx={{
            mt: 1,
            p: 2,
            borderLeft: "6px solid #4caf50",
            maxWidth: "500px",
            textAlign: "left",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography variant="body1" sx={{ color: "error.main", fontWeight: "bold" }}>
            Note: For testing purposes
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            Use <span style={{ color: "#2e7d32", fontWeight: "600" }}>urvann</span> as the{" "}
            <strong>ADMIN_KEY</strong> when creating an admin account.
          </Typography>
        </Paper>
      )}

      {user && (
        <Paper
          elevation={2}
          sx={{
            mt: 1,
            p: 2,
            borderLeft: "6px solid #4caf50",
            maxWidth: "500px",
            textAlign: "left",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography variant="body1" sx={{ color: "success.main", fontWeight: "bold" }}>
            Welcome back, {user.username}! 🎉
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            You are logged in as{" "}
            <span style={{ color: user.role === "admin" ? "#d32f2f" : "#2e7d32", fontWeight: 600 }}>
              {user.role.toUpperCase()}
            </span>.
          </Typography>
        </Paper>
      )}

      {/* Action Buttons */}
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          justifyContent: "center",
        }}
      >
        {!user && (
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            color="primary"
            startIcon={<LogIn size={20} />}
            sx={{ minWidth: 180 }}
          >
            Login / Register
          </Button>
        )}

        {user && (
          <Button
            component={Link}
            to="/plants"
            variant="contained"
            color="success"
            startIcon={<Eye size={20} />}
            sx={{ minWidth: 180 }}
          >
            View All Plants
          </Button>
        )}

        {user && user.role === "admin" && (
          <Button
            component={Link}
            to="/add-plant"
            variant="contained"
            color="outlined"
            startIcon={<Plus size={20} />}
            sx={{ minWidth: 180 }}
          >
            Add New Plant
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Home;
