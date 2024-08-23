import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import cryptoHomePageImg from '../assets/CryptoHomePage.png'; // Import the background image

export default function Signup() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        background: `url(${cryptoHomePageImg}) center top / cover no-repeat`, // Use the imported image
        alignItems: "center",
        justifyContent: "center",
        color: "#E0E0E0",
      }}
    >
      {/* Centered Signup Form */}
      <Box
        sx={{
          backgroundColor: "rgba(30, 30, 30, 0.85)", // Semi-transparent background
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "40px",
          width: { xs: "90%", md: "400px" }, // Centered and responsive width
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: "bold", color: "#F5F5F5" }}
        >
          Create an Account
        </Typography>

        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
          }}
          InputLabelProps={{
            style: { color: "#F5F5F5" }, // White label text
          }}
          inputProps={{
            style: { color: "#F5F5F5" }, // White input text
          }}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
          }}
          InputLabelProps={{
            style: { color: "#F5F5F5" }, // White label text
          }}
          inputProps={{
            style: { color: "#F5F5F5" }, // White input text
          }}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{
            mb: 3,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
          }}
          InputLabelProps={{
            style: { color: "#F5F5F5" },
          }}
          inputProps={{
            style: { color: "#F5F5F5" },
          }}
        />

        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{
            mb: 3,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
          }}
          InputLabelProps={{
            style: { color: "#F5F5F5" },
          }}
          inputProps={{
            style: { color: "#F5F5F5" },
          }}
        />

        <Button
          variant="contained"
          sx={{
            width: "100%",
            py: 1.5,
            fontWeight: "bold",
            borderRadius: "10px",
            background: "linear-gradient(90deg, #007BFF, #6A0D91)", // Electric Blue to Violet
            color: "#E0E0E0",
            "&:hover": {
              background: "linear-gradient(90deg, #39FF14, #FFD700)", // Neon Green to Soft Gold hover effect
            },
          }}
        >
          Sign Up
        </Button>

        <Typography sx={{ mt: 2 }}>
          Already have an account?{" "}
          <NavLink to={"/login"}>
            <span style={{ color: "#39FF14" }}>Log In</span>
          </NavLink>
        </Typography>
      </Box>
    </Box>
  );
}
