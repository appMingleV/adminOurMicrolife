import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Link,
  Box,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);
  const navigate = useNavigate();
  const baseURl = import.meta.env.VITE_BASE_URL;
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated) {
    navigate("/admin/dashboard");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("data is", email, password);
    // console.log("base url is ", baseURl);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}admin/login`,
        {
          email,
          password,
        }
      );
console.log("response of admin login",response.data);
      // Handle successful login
      if (response.data && response.data.token) {
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("authToken", response.data.token); // Save the token if required
        navigate("/admin/dashboard");
      } else {
        setWrong(true);
        setTimeout(() => {
          setWrong(false);
        }, 2000);
      }
    } catch (error) {
      // Handle error
      console.error("Login failed:", error);
      setWrong(true);
      setTimeout(() => {
        setWrong(false);
      }, 2000);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url('https://example.com/your-background-image.jpg')`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {wrong && (
        <Box
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          <Stack sx={{ width: "300px" }} spacing={2}>
            <Alert severity="error">Invalid Credentials!</Alert>
          </Stack>
        </Box>
      )}
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: Semi-transparent white background for the form
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography component="h1" variant="h2">
          OurMicroLife
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
